function createEle(element, elemClass = "", elemId = "") {
  var element = document.createElement(element);
  element.setAttribute("class", elemClass);
  element.setAttribute("id", elemId);
  return element;
}

function createInput(
  element,
  type,
  elemclass = "",
  elemId = "",
  elename = "",
  eleval = ""
) {
  var element = document.createElement(element);
  element.setAttribute("type", type);
  element.setAttribute("class", elemclass);
  element.setAttribute("id", elemId);
  element.setAttribute("name", elename);
  element.setAttribute("value", eleval);
  return element;
}

function createHead(arr) {
  var tr = document.createElement("tr");
  arr.forEach((obj) => {
    var th = document.createElement("th");
    th.innerHTML = obj.LabelName;
    tr.append(th);
  });
  return tr;
}

var data = [
  {
    id: "1",
    type: "text",
    LabelName: "First Name",
  },
  {
    id: "2",
    type: "text",
    LabelName: "Last Name",
  },
  {
    id: "3",
    type: "radio",
    LabelName: "Gender",
    Labeldata: ["Male", "Female"],
  },
  {
    id: "4",
    type: "check",
    LabelName: "Favorite food",
    Labeldata: ["Dal Rice", "Curd Rice", "Chicken", "Poha", "White Rice"],
  },
  {
    id: "5",
    type: "text",
    LabelName: "Address",
  },
  {
    id: "6",
    type: "text",
    LabelName: "City",
  },
  {
    id: "7",
    type: "select",
    LabelName: "State",
    Labeldata: [
      "Andaman and Nicobar Islands",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chandigarh",
      "Chhattisgarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Lakshadweep",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Puducherry",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
  },
  {
    id: "8",
    type: "text",
    LabelName: "Pincode",
  },
  {
    id: "9",
    type: "text",
    LabelName: "Country",
    Labeldata: ["India", "Nepal"],
  },
];

var form_container = createEle("div", "container mt-4");
var form = createEle("form");
var form_row = createEle("div", "form-row align-self-center");

data.forEach((obj) => {
  var col = createEle("div", "form-group col-6");
  var label = createEle("label", "font-weight-bold");
  label.innerHTML = `${obj.LabelName} <sup class='text-danger'>*</sup>`;
  label.setAttribute("for", obj.LabelName.split(" ").join(""));
  col.append(label);
  if (obj.type === "text") {
    var inp_tag = createInput(
      "input",
      "text",
      "form-control",
      obj.LabelName.split(" ").join(""),
      obj.LabelName.split(" ").join(""),
      ""
    );
    // inp_tag.setAttribute('required','required');
    col.append(inp_tag);
  }

  if (obj.type === "radio") {
    var radio_div = createEle("div");
    for (var i = 0; i < obj.Labeldata.length; i++) {
      var check_div = createEle("div", "form-check ml-5");
      var inp_rad = createInput(
        "input",
        "radio",
        "form-check-input",
        obj.LabelName.split(" ").join(""),
        obj.LabelName.split(" ").join(""),
        obj.Labeldata[i]
      );
      var label = createEle("label", "form-check-label");
      label.innerHTML = obj.Labeldata[i];
      label.setAttribute("for", obj.LabelName.split(" ").join(""));
      check_div.append(inp_rad, label);
      radio_div.append(check_div);
    }
    col.append(radio_div);
  }

  if (obj.type === "check") {
    var check_div = createEle("div");
    for (var i = 0; i < obj.Labeldata.length; i++) {
      var div = createEle("div", "form-check ml-5");
      var inp_check = createInput(
        "input",
        "checkbox",
        "form-check-input",
        obj.LabelName.split(" ").join(""),
        obj.LabelName.split(" ").join(""),
        obj.Labeldata[i]
      );
      var label = createEle("label", "form-check-label");
      label.innerHTML = obj.Labeldata[i];
      label.setAttribute("for", obj.LabelName.split(" ").join(""));
      div.append(inp_check, label);
      check_div.append(div);
    }
    col.append(check_div);
  }

  if (obj.type === "select") {
    var select_tag = createEle(
      "select",
      "form-control",
      obj.LabelName.split(" ").join("")
    );
    var option = createEle("option");
    option.setAttribute("value", "undefined");
    option.innerHTML = "Select State";
    select_tag.append(option);

    for (var i = 0; i <= obj.Labeldata.length; i++) {
      var option = createEle("option");
      option.setAttribute("value", obj.Labeldata[i]);
      option.innerHTML = obj.Labeldata[i];
      select_tag.append(option);
    }
    col.append(select_tag);
  }
  form_row.append(col);
});
var subbtn = createEle("button", "btn btn-primary ");
subbtn.setAttribute("type", "button");
subbtn.innerHTML = "Submit";
subbtn.setAttribute("onclick", "getdata()");
// form_row.append(subbtn);
form.append(form_row);
form.append(subbtn);
form_container.append(form);
document.body.append(form_container);

function getdata() {
  var firstName = document.getElementById("FirstName").value;
  var lastName = document.getElementById("LastName").value;
  var ele = document.getElementsByName("Gender");
  var gender;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) gender = ele[i].value;
  }
  var food_ele = document.getElementsByName("Favoritefood");
  var food = [];
  for (i = 0; i < food_ele.length; i++) {
    if (food_ele[i].checked) food.push(food_ele[i].value);
  }
  var address = document.getElementById("Address").value;
  var city = document.getElementById("City").value;
  var state = document.getElementById("State").value;
  var pincode = document.getElementById("Pincode").value;
  var country = document.getElementById("Country").value;

  setTimeout(function () {
    document.querySelector("form").reset();
  }, 1000);

  var tab_data = [
    {
      "First Name": firstName,
      "Last Name": lastName,
      Gender: gender,
      Food: food,
      Address: address,
      City: city,
      State: state,
      Pincode: pincode,
      Country: country,
    },
  ];

  if (
    firstName != undefined &&
    lastName != undefined &&
    gender != undefined &&
    food != "" &&
    address != undefined &&
    city != undefined &&
    state != "undefined" &&
    pincode != undefined
  ) {
    buildTable(tab_data);
  } else {
    alert("Please Fill The required fields..!");
  }
}

var table_container = createEle("div", "container", "table_container");
var table = createEle(
  "table",
  "mt-5 table table-striped text-center",
  "table_content"
);
var thead = createEle("thead", "bg-dark");
thead.style.color = "white";
var th = createHead(data);
thead.appendChild(th);

function buildTable(arr) {
  var tbody = document.createElement("tbody");
  arr.forEach((obj) => {
    var tr = document.createElement("tr");
    for (var key in obj) {
      var td = document.createElement("td");
      td.innerHTML = obj[key];
      tr.append(td);
    }
    tbody.appendChild(tr);
  });
  table.append(thead, tbody);
}

table_container.append(table);
document.body.append(table_container);
