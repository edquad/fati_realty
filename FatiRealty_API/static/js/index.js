$(document).ready(function () {
  getdata();
});

function getdata() {
  var tempUrl = "/GetapiData/TDRECENCYMETRICSData";
  $.ajax({
    url: tempUrl,
    type: "GET",
    success: function (data) {
      // build chart
      for (var i in data) {
        $("#bindtable").append(`
          <tr>
          <td>${data[i].TD_TABLE_NAME}</td>
          <td>${data[i].TD_TRANSACTION_DATE}</td>
          <td>${data[i].TD_ROW_COUNT}</td>
          <td>${data[i].TD_RECENCY_DATE}</td>
          <td>${data[i].CREATED_TS}</td>
          <td>${`<button value="${data[i].TD_ROW_COUNT}" onclick="deleteData(this)" class="btn btn-primary pull-right" style="padding:3px; font-size:10px;">Delete</button>`}</td>
          <td>${`<button value="${data[i].TD_ROW_COUNT}" data-toggle="modal" data-target="#exampleModalCenter" onclick="Openform(this)" class="btn btn-primary pull-right" style="padding:3px; font-size:10px;">Submit</button>`}</td>
          </tr>
          `);
      }

      // console.log(data)
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function deleteData(btn) {
  try {
    var TD_ROW_COUNT = $(btn).val().trim();
    $.ajax({
      url: "/GetapiData/Recency_Delete_row/" + TD_ROW_COUNT,
      dataType: "json",
      method: "GET",
      contentType: "application/json; charset=utf-8",
      success: function (data, success) {
        $("#bindtable").html("");
        alert("Successfully Deleted");
        getdata();
      },
    });
  } catch (e) {
    console.log(e);
  }
}

$("#SubmitData").click(function (e) {
  try {
    var td_tableName = $("#id_td_tableName").val();
    var TD_TRANSACTION_DATE = $("#id_TD_TRANSACTION_DATE").val();
    var TD_ROW_COUNT = $("#id_TD_ROW_COUNT").val();
    var TD_RECENCY_DATE = $("#id_TD_RECENCY_DATE").val();
    var CREATED_TS = $("#id_CREATED_TS").val();
    var data = {
      td_tableName: td_tableName,
      TD_TRANSACTION_DATE: TD_TRANSACTION_DATE,
      TD_ROW_COUNT: TD_ROW_COUNT,
      TD_RECENCY_DATE: TD_RECENCY_DATE,
      CREATED_TS: CREATED_TS,
    };

    fetch("GetapiData/postdata", {
      method: "POST",
      headers: {
        Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  } catch (e) {
    console.log(e);
  }
});

window.onload = function () {
  document.getElementById("#SubmitData").click();
};
