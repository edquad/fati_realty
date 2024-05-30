import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';

// type Props = {
//     data?: any;
// };

function PieChartMortgageCalcComponent() {
    const data = [
        { value: 10, category: 'Principal' },
        { value: 5, category: 'interest' },
        { value: 9, category: 'Property Tax' },
        { value: 8, category: 'Insurance' }
    ];
    useLayoutEffect(() => {
        let root = am5.Root.new('MortgageCalc');

        root.setThemes([am5themes_Dark.new(root)]);

        if (root) {
            root._logo?.dispose();
        }

        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
                innerRadius: am5.percent(50)
            })
        );

        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                name: 'Series',
                valueField: 'value',
                categoryField: 'name',
                alignLabels: false
            })
        );
        series.labels.template.setAll({
            maxWidth: 100,
            oversizedBehavior: 'wrap' // to truncate labels, use "truncate"
        });
        series.data.setAll(data);
        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.percent(50),
                x: am5.percent(50),
                marginTop: 15,
                marginBottom: 15
            })
        );

        legend.data.setAll(series.dataItems);
        series.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, []);

    return <div id="MortgageCalc" style={{ width: '100%', height: '500px' }}></div>;
}

export default PieChartMortgageCalcComponent;
