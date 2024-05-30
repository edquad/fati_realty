import { useLayoutEffect, useState } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import { DataItem } from '@amcharts/amcharts5';
import { IMapPolygonSeriesDataItem } from '@amcharts/amcharts5/map';
import { Dropdown } from 'primereact/dropdown';

// type Props = {
//     data?: any;
// };

function MapComponent() {
    const data = [
        {
            id: 'US',
            name: 'United States',
            value: 100
        },
        {
            id: 'GB',
            name: 'United Kingdom',
            value: 100
        },
        {
            id: 'CN',
            name: 'China',
            value: 100
        },
        {
            id: 'IN',
            name: 'India',
            value: 100
        },
        {
            id: 'AU',
            name: 'Australia',
            value: 100
        },
        {
            id: 'CA',
            name: 'Canada',
            value: 100
        },
        {
            id: 'BR',
            name: 'Brasil',
            value: 100
        },
        {
            id: 'ZA',
            name: 'South Africa',
            value: 100
        }
    ];
    const [selectedCity, setSelectedCity] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
    useLayoutEffect(() => {
        let root = am5.Root.new('MapComponent');

        root.setThemes([am5themes_Dark.new(root)]);

        if (root) {
            root._logo?.dispose();
        }
        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: 'rotateX',
                wheelY: 'zoom',
                wheelSensitivity: 0.1,
                pinchZoom: false
            })
        );

        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ['AQ']
            })
        );
        polygonSeries.mapPolygons.template.events.on('click', function (ev) {
            const dataItem = ev.target.dataItem as DataItem<IMapPolygonSeriesDataItem> | undefined;
            if (dataItem) {
                polygonSeries.zoomToDataItem(dataItem);
            }
        });

        let bubbleSeries = chart.series.push(
            am5map.MapPointSeries.new(root, {
                valueField: 'value',
                calculateAggregates: true,
                polygonIdField: 'id'
            })
        );

        let circleTemplate: am5.Template<am5.Circle> = am5.Template.new({});
        bubbleSeries.bullets.push(function (root, series, dataItem) {
            let container = am5.Container.new(root, {});
            let circle = container.children.push(
                am5.Circle.new(
                    root,
                    {
                        radius: 20,
                        fillOpacity: 1,
                        fill: am5.color('#e91e63'),
                        cursorOverStyle: 'pointer',
                        tooltipText: `{name}: [bold]{value}[/]`
                    },
                    circleTemplate
                )
            );
            let countryLabel = container.children.push(
                am5.Label.new(root, {
                    paddingLeft: 5,
                    populateText: true,
                    fontWeight: 'bold',
                    fontSize: 13,
                    centerY: am5.p50
                })
            );

            circle.on('radius', function (radius) {
                countryLabel.set('x', radius);
            });

            return am5.Bullet.new(root, {
                sprite: container,
                dynamic: true
            });
        });

        bubbleSeries.bullets.push(function (root, series, dataItem) {
            return am5.Bullet.new(root, {
                sprite: am5.Label.new(root, {
                    text: '{value}',
                    fill: am5.color(0xffffff),
                    populateText: true,
                    centerX: am5.p50,
                    centerY: am5.p50,
                    textAlign: 'center'
                }),
                dynamic: true
            });
        });
        bubbleSeries.data.setAll(data);
        return () => {
            root.dispose();
        };
    }, []);

    return (
        <>
            <div className="flex justify-content-between">
                <h5>Map</h5>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={countries} optionLabel="name" placeholder="Countries" className="w-full md:w-14rem ml-auto" />
            </div>
            <div id="MapComponent" style={{ width: '100%', height: '700px', margin: 'auto' }}></div>
        </>
    );
}

export default MapComponent;
