const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  const newCountryList = {
    EUR: "",	
    USD: "",	
    JPY: "",	
    BGN: "",	
    CZK: "",
    DKK: "",
    GBP: "",	
    HUF: "",	
    PLN: "",	
    RON: "",	
    SEK: "",	
    CHF: "",	
    ISK: "",		
    HRK: "",	
    RUB: "",	
    TRY: "",	
    AUD: "",
    BRL: "",	
    CAD: "",	
    CNY: "",	 
    HKD: "",	
    IDR: "",	
    ILS: "",
    INR: "",	
    KRW: "",	
    MXN: "",	
    MYR: "",	
    NZD: "",	
    PHP: "",	
    SGD: "",
    THB: "",	
    ZAR: "",	
  };
for(let ch in newCountryList){
  for(let value in countryList){
    if(ch === value){
      newCountryList[ch] = countryList[value];
    }
  }
}


  const but = document.querySelector("#but");

  const dropdown = document.querySelectorAll(".select select");

  const val = document.querySelector("input");

  const selectfrom = document.querySelector("#from");


  const selectto = document.querySelector("#to");

  const msg = document.querySelector("#msg");
 
  for(let sel of dropdown){
  
    for(let currcode in newCountryList){
        let newoption = document.createElement("option");
        newoption.value = currcode;
        newoption.innerText = currcode;
        if(sel.name === "from"  &&  newoption.value === "USD"){
            newoption.selected = true;
        }else  if(sel.name === "to"  &&  newoption.value === "INR"){
            newoption.selected = true;
        }
        sel.append(newoption);
        
    }
    sel.addEventListener("change" , (evt)=>{
        updateflag(evt.target);
    })
  }

  let updateflag = (event)=>{
    let imgurl = `https://flagsapi.com/${countryList[event.value]}/flat/64.png`
    if(event.parentElement.getAttribute("class") === "from"){
    (document.querySelector("#imgfrom")).setAttribute("src" , imgurl);
}else{
    (document.querySelector("#imgto")).setAttribute("src" , imgurl);
  }

  }

  but.addEventListener("click" , (event)=>{
   event.preventDefault();
  if((val.value) <1){
    val.value = 1;
  }
   console.log(selectfrom.value);
   console.log(selectto.value);
   let valfrom = selectfrom.value;
   let valto = selectto.value;
   fetching();
  });

  let fetching = async()=>{
    let curr = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ssDku6HS3kt3YRBvLu0stztbtCJCf9VuYaHesqYjdmss&currencies=${selectto.value}&base_currency=${selectfrom.value}`);
    let data = await curr.json();
    console.log(data);
    let newval = (data.data)[selectto.value];
    console.log(newval);
    let totalval = val.value*newval;
    console.log(totalval);
    msg.innerText = `${val.value} ${selectfrom.value}  =  ${totalval} ${selectto.value}`;
   };

   fetching();


  