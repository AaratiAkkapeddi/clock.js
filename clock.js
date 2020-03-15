/* List of known timezones */
var timezones=[{tz:"ACDT",name:"Australian Central Daylight Savings Time",offset:"UTC+10:30"},{tz:"ACST",name:"Australian Central Standard Time",offset:"UTC+09:30"},{tz:"ACT",name:"Acre Time",offset:"UTC−05"},{tz:"ACT",name:"ASEAN Common Time (unofficial)",offset:"UTC+06:30 – UTC+09"},{tz:"ACWST",name:"Australian Central Western Standard Time (unofficial)",offset:"UTC+08:45"},{tz:"ADT",name:"Atlantic Daylight Time",offset:"UTC−03"},{tz:"AEDT",name:"Australian Eastern Daylight Savings Time",offset:"UTC+11"},{tz:"AEST",name:"Australian Eastern Standard Time",offset:"UTC+10"},{tz:"AET",name:"Australian Eastern Time",offset:"UTC+10/UTC+11"},{tz:"AFT",name:"Afghanistan Time",offset:"UTC+04:30"},{tz:"AKDT",name:"Alaska Daylight Time",offset:"UTC−08"},{tz:"AKST",name:"Alaska Standard Time",offset:"UTC−09"},{tz:"ALMT",name:"Alma-Ata Time[1]",offset:"UTC+06"},{tz:"AMST",name:"Amazon Summer Time (Brazil)[2]",offset:"UTC−03"},{tz:"AMT",name:"Amazon Time (Brazil)[3]",offset:"UTC−04"},{tz:"AMT",name:"Armenia Time",offset:"UTC+04"},{tz:"ANAT",name:"Anadyr Time[4]",offset:"UTC+12"},{tz:"AQTT",name:"Aqtobe Time[5]",offset:"UTC+05"},{tz:"ART",name:"Argentina Time",offset:"UTC−03"},{tz:"AST",name:"Arabia Standard Time",offset:"UTC+03"},{tz:"AST",name:"Atlantic Standard Time",offset:"UTC−04"},{tz:"AWST",name:"Australian Western Standard Time",offset:"UTC+08"},{tz:"AZOST",name:"Azores Summer Time",offset:"UTC±00"},{tz:"AZOT",name:"Azores Standard Time",offset:"UTC−01"},{tz:"AZT",name:"Azerbaijan Time",offset:"UTC+04"},{tz:"BDT",name:"Brunei Time",offset:"UTC+08"},{tz:"BIOT",name:"British Indian Ocean Time",offset:"UTC+06"},{tz:"BIT",name:"Baker Island Time",offset:"UTC−12"},{tz:"BOT",name:"Bolivia Time",offset:"UTC−04"},{tz:"BRST",name:"Brasília Summer Time",offset:"UTC−02"},{tz:"BRT",name:"Brasília Time",offset:"UTC−03"},{tz:"BST",name:"Bangladesh Standard Time",offset:"UTC+06"},{tz:"BST",name:"Bougainville Standard Time[6]",offset:"UTC+11"},{tz:"BST",name:"British Summer Time (British Standard Time from Feb 1968 to Oct 1971)",offset:"UTC+01"},{tz:"BTT",name:"Bhutan Time",offset:"UTC+06"},{tz:"CAT",name:"Central Africa Time",offset:"UTC+02"},{tz:"CCT",name:"Cocos Islands Time",offset:"UTC+06:30"},{tz:"CDT",name:"Central Daylight Time (North America)",offset:"UTC−05"},{tz:"CDT",name:"Cuba Daylight Time[7]",offset:"UTC−04"},{tz:"CEST",name:"Central European Summer Time (Cf. HAEC)",offset:"UTC+02"},{tz:"CET",name:"Central European Time",offset:"UTC+01"},{tz:"CHADT",name:"Chatham Daylight Time",offset:"UTC+13:45"},{tz:"CHAST",name:"Chatham Standard Time",offset:"UTC+12:45"},{tz:"CHOT",name:"Choibalsan Standard Time",offset:"UTC+08"},{tz:"CHOST",name:"Choibalsan Summer Time",offset:"UTC+09"},{tz:"CHST",name:"Chamorro Standard Time",offset:"UTC+10"},{tz:"CHUT",name:"Chuuk Time",offset:"UTC+10"},{tz:"CIST",name:"Clipperton Island Standard Time",offset:"UTC−08"},{tz:"CIT",name:"Central Indonesia Time",offset:"UTC+08"},{tz:"CKT",name:"Cook Island Time",offset:"UTC−10"},{tz:"CLST",name:"Chile Summer Time",offset:"UTC−03"},{tz:"CLT",name:"Chile Standard Time",offset:"UTC−04"},{tz:"COST",name:"Colombia Summer Time",offset:"UTC−04"},{tz:"COT",name:"Colombia Time",offset:"UTC−05"},{tz:"CST",name:"Central Standard Time (North America)",offset:"UTC−06"},{tz:"CST",name:"China Standard Time",offset:"UTC+08"},{tz:"CST",name:"Cuba Standard Time",offset:"UTC−05"},{tz:"CT",name:"China Time",offset:"UTC+08"},{tz:"CVT",name:"Cape Verde Time",offset:"UTC−01"},{tz:"CWST",name:"Central Western Standard Time (Australia) unofficial",offset:"UTC+08:45"},{tz:"CXT",name:"Christmas Island Time",offset:"UTC+07"},{tz:"DAVT",name:"Davis Time",offset:"UTC+07"},{tz:"DDUT",name:"Dumont d'Urville Time",offset:"UTC+10"},{tz:"DFT",name:"AIX-specific equivalent of Central European Time[NB 1]",offset:"UTC+01"},{tz:"EASST",name:"Easter Island Summer Time",offset:"UTC−05"},{tz:"EAST",name:"Easter Island Standard Time",offset:"UTC−06"},{tz:"EAT",name:"East Africa Time",offset:"UTC+03"},{tz:"ECT",name:"Eastern Caribbean Time (does not recognise DST)",offset:"UTC−04"},{tz:"ECT",name:"Ecuador Time",offset:"UTC−05"},{tz:"EDT",name:"Eastern Daylight Time (North America)",offset:"UTC−04"},{tz:"EEST",name:"Eastern European Summer Time",offset:"UTC+03"},{tz:"EET",name:"Eastern European Time",offset:"UTC+02"},{tz:"EGST",name:"Eastern Greenland Summer Time",offset:"UTC±00"},{tz:"EGT",name:"Eastern Greenland Time",offset:"UTC−01"},{tz:"EIT",name:"Eastern Indonesian Time",offset:"UTC+09"},{tz:"EST",name:"Eastern Standard Time (North America)",offset:"UTC−05"},{tz:"FET",name:"Further-eastern European Time",offset:"UTC+03"},{tz:"FJT",name:"Fiji Time",offset:"UTC+12"},{tz:"FKST",name:"Falkland Islands Summer Time",offset:"UTC−03"},{tz:"FKT",name:"Falkland Islands Time",offset:"UTC−04"},{tz:"FNT",name:"Fernando de Noronha Time",offset:"UTC−02"},{tz:"GALT",name:"Galápagos Time",offset:"UTC−06"},{tz:"GAMT",name:"Gambier Islands Time",offset:"UTC−09"},{tz:"GET",name:"Georgia Standard Time",offset:"UTC+04"},{tz:"GFT",name:"French Guiana Time",offset:"UTC−03"},{tz:"GILT",name:"Gilbert Island Time",offset:"UTC+12"},{tz:"GIT",name:"Gambier Island Time",offset:"UTC−09"},{tz:"GMT",name:"Greenwich Mean Time",offset:"UTC±00"},{tz:"GST",name:"South Georgia and the South Sandwich Islands Time",offset:"UTC−02"},{tz:"GST",name:"Gulf Standard Time",offset:"UTC+04"},{tz:"GYT",name:"Guyana Time",offset:"UTC−04"},{tz:"HDT",name:"Hawaii–Aleutian Daylight Time",offset:"UTC−09"},{tz:"HAEC",name:"Heure Avancée d'Europe Centrale French-language name for CEST",offset:"UTC+02"},{tz:"HST",name:"Hawaii–Aleutian Standard Time",offset:"UTC−10"},{tz:"HKT",name:"Hong Kong Time",offset:"UTC+08"},{tz:"HMT",name:"Heard and McDonald Islands Time",offset:"UTC+05"},{tz:"HOVST",name:"Hovd Summer Time (not used from 2017-present)",offset:"UTC+08"},{tz:"HOVT",name:"Hovd Time",offset:"UTC+07"},{tz:"ICT",name:"Indochina Time",offset:"UTC+07"},{tz:"IDLW",name:"International Day Line West time zone",offset:"UTC−12"},{tz:"IDT",name:"Israel Daylight Time",offset:"UTC+03"},{tz:"IOT",name:"Indian Ocean Time",offset:"UTC+03"},{tz:"IRDT",name:"Iran Daylight Time",offset:"UTC+04:30"},{tz:"IRKT",name:"Irkutsk Time",offset:"UTC+08"},{tz:"IRST",name:"Iran Standard Time",offset:"UTC+03:30"},{tz:"IST",name:"Indian Standard Time",offset:"UTC+05:30"},{tz:"IST",name:"Irish Standard Time[8]",offset:"UTC+01"},{tz:"IST",name:"Israel Standard Time",offset:"UTC+02"},{tz:"JST",name:"Japan Standard Time",offset:"UTC+09"},{tz:"KALT",name:"Kaliningrad Time",offset:"UTC+02"},{tz:"KGT",name:"Kyrgyzstan Time",offset:"UTC+06"},{tz:"KOST",name:"Kosrae Time",offset:"UTC+11"},{tz:"KRAT",name:"Krasnoyarsk Time",offset:"UTC+07"},{tz:"KST",name:"Korea Standard Time",offset:"UTC+09"},{tz:"LHST",name:"Lord Howe Standard Time",offset:"UTC+10:30"},{tz:"LHST",name:"Lord Howe Summer Time",offset:"UTC+11"},{tz:"LINT",name:"Line Islands Time",offset:"UTC+14"},{tz:"MAGT",name:"Magadan Time",offset:"UTC+12"},{tz:"MART",name:"Marquesas Islands Time",offset:"UTC−09:30"},{tz:"MAWT",name:"Mawson Station Time",offset:"UTC+05"},{tz:"MDT",name:"Mountain Daylight Time (North America)",offset:"UTC−06"},{tz:"MET",name:"Middle European Time Same zone as CET",offset:"UTC+01"},{tz:"MEST",name:"Middle European Summer Time Same zone as CEST",offset:"UTC+02"},{tz:"MHT",name:"Marshall Islands Time",offset:"UTC+12"},{tz:"MIST",name:"Macquarie Island Station Time",offset:"UTC+11"},{tz:"MIT",name:"Marquesas Islands Time",offset:"UTC−09:30"},{tz:"MMT",name:"Myanmar Standard Time",offset:"UTC+06:30"},{tz:"MSK",name:"Moscow Time",offset:"UTC+03"},{tz:"MST",name:"Malaysia Standard Time",offset:"UTC+08"},{tz:"MST",name:"Mountain Standard Time (North America)",offset:"UTC−07"},{tz:"MUT",name:"Mauritius Time",offset:"UTC+04"},{tz:"MVT",name:"Maldives Time",offset:"UTC+05"},{tz:"MYT",name:"Malaysia Time",offset:"UTC+08"},{tz:"NCT",name:"New Caledonia Time",offset:"UTC+11"},{tz:"NDT",name:"Newfoundland Daylight Time",offset:"UTC−02:30"},{tz:"NFT",name:"Norfolk Island Time",offset:"UTC+11"},{tz:"NOVT",name:"Novosibirsk Time [9]",offset:"UTC+07"},{tz:"NPT",name:"Nepal Time",offset:"UTC+05:45"},{tz:"NST",name:"Newfoundland Standard Time",offset:"UTC−03:30"},{tz:"NT",name:"Newfoundland Time",offset:"UTC−03:30"},{tz:"NUT",name:"Niue Time",offset:"UTC−11"},{tz:"NZDT",name:"New Zealand Daylight Time",offset:"UTC+13"},{tz:"NZST",name:"New Zealand Standard Time",offset:"UTC+12"},{tz:"OMST",name:"Omsk Time",offset:"UTC+06"},{tz:"ORAT",name:"Oral Time",offset:"UTC+05"},{tz:"PDT",name:"Pacific Daylight Time (North America)",offset:"UTC−07"},{tz:"PET",name:"Peru Time",offset:"UTC−05"},{tz:"PETT",name:"Kamchatka Time",offset:"UTC+12"},{tz:"PGT",name:"Papua New Guinea Time",offset:"UTC+10"},{tz:"PHOT",name:"Phoenix Island Time",offset:"UTC+13"},{tz:"PHT",name:"Philippine Time",offset:"UTC+08"},{tz:"PKT",name:"Pakistan Standard Time",offset:"UTC+05"},{tz:"PMDT",name:"Saint Pierre and Miquelon Daylight Time",offset:"UTC−02"},{tz:"PMST",name:"Saint Pierre and Miquelon Standard Time",offset:"UTC−03"},{tz:"PONT",name:"Pohnpei Standard Time",offset:"UTC+11"},{tz:"PST",name:"Pacific Standard Time (North America)",offset:"UTC−08"},{tz:"PST",name:"Philippine Standard Time",offset:"UTC+08"},{tz:"PYST",name:"Paraguay Summer Time[10]",offset:"UTC−03"},{tz:"PYT",name:"Paraguay Time[11]",offset:"UTC−04"},{tz:"RET",name:"Réunion Time",offset:"UTC+04"},{tz:"ROTT",name:"Rothera Research Station Time",offset:"UTC−03"},{tz:"SAKT",name:"Sakhalin Island Time",offset:"UTC+11"},{tz:"SAMT",name:"Samara Time",offset:"UTC+04"},{tz:"SAST",name:"South African Standard Time",offset:"UTC+02"},{tz:"SBT",name:"Solomon Islands Time",offset:"UTC+11"},{tz:"SCT",name:"Seychelles Time",offset:"UTC+04"},{tz:"SDT",name:"Samoa Daylight Time",offset:"UTC−10"},{tz:"SGT",name:"Singapore Time",offset:"UTC+08"},{tz:"SLST",name:"Sri Lanka Standard Time",offset:"UTC+05:30"},{tz:"SRET",name:"Srednekolymsk Time",offset:"UTC+11"},{tz:"SRT",name:"Suriname Time",offset:"UTC−03"},{tz:"SST",name:"Samoa Standard Time",offset:"UTC−11"},{tz:"SST",name:"Singapore Standard Time",offset:"UTC+08"},{tz:"SYOT",name:"Showa Station Time",offset:"UTC+03"},{tz:"TAHT",name:"Tahiti Time",offset:"UTC−10"},{tz:"THA",name:"Thailand Standard Time",offset:"UTC+07"},{tz:"TFT",name:"French Southern and Antarctic Time[12]",offset:"UTC+05"},{tz:"TJT",name:"Tajikistan Time",offset:"UTC+05"},{tz:"TKT",name:"Tokelau Time",offset:"UTC+13"},{tz:"TLT",name:"Timor Leste Time",offset:"UTC+09"},{tz:"TMT",name:"Turkmenistan Time",offset:"UTC+05"},{tz:"TRT",name:"Turkey Time",offset:"UTC+03"},{tz:"TOT",name:"Tonga Time",offset:"UTC+13"},{tz:"TVT",name:"Tuvalu Time",offset:"UTC+12"},{tz:"ULAST",name:"Ulaanbaatar Summer Time",offset:"UTC+09"},{tz:"ULAT",name:"Ulaanbaatar Standard Time",offset:"UTC+08"},{tz:"UTC",name:"Coordinated Universal Time",offset:"UTC±00"},{tz:"UYST",name:"Uruguay Summer Time",offset:"UTC−02"},{tz:"UYT",name:"Uruguay Standard Time",offset:"UTC−03"},{tz:"UZT",name:"Uzbekistan Time",offset:"UTC+05"},{tz:"VET",name:"Venezuelan Standard Time",offset:"UTC−04"},{tz:"VLAT",name:"Vladivostok Time",offset:"UTC+10"},{tz:"VOLT",name:"Volgograd Time",offset:"UTC+04"},{tz:"VOST",name:"Vostok Station Time",offset:"UTC+06"},{tz:"VUT",name:"Vanuatu Time",offset:"UTC+11"},{tz:"WAKT",name:"Wake Island Time",offset:"UTC+12"},{tz:"WAST",name:"West Africa Summer Time",offset:"UTC+02"},{tz:"WAT",name:"West Africa Time",offset:"UTC+01"},{tz:"WEST",name:"Western European Summer Time",offset:"UTC+01"},{tz:"WET",name:"Western European Time",offset:"UTC±00"},{tz:"WIT",name:"Western Indonesian Time",offset:"UTC+07"},{tz:"WGST",name:"West Greenland Summer Time[13]",offset:"UTC-02"},{tz:"WGT",name:"West Greenland Time[14]",offset:"UTC-03"},{tz:"WST",name:"Western Standard Time",offset:"UTC+08"},{tz:"YAKT",name:"Yakutsk Time",offset:"UTC+09"},{tz:"YEKT",name:"Yekaterinburg Time",offset:"UTC+05"}];
/* find timezone offset */
Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}
/* check if daylight savings time */
Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}
/* add hours  */
Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}
/* Get the current time for a particular timezone */
var getCurrentTime = function(timezone){
	var finalOffset;
  		for (var i = timezones.length - 1; i >= 0; i--) {
  			var tz = timezones[i]['tz']
  			var offset = timezones[i]['offset']
  			if(timezone == "current"){
  				var d = new Date();
				var n = d.getTimezoneOffset()/60;
				if(d.toString().includes("Daylight")){
					n = n + 1;
				}
  				finalOffset = n * -1
  			} else if(tz == timezone){
  				finalOffset = offset
  			}
  		}
  		if(!finalOffset){
  			console.log('error: Could not find timezone. Check to see you inputted the correct timezone abbreviation')
  		} else{
  				if(timezone == "current"){
		  			var offset = finalOffset
		  		} else{
		  			var offset = finalOffset.split('UTC')[1].replace('−','-').replace('±','')
		  		}
		        var d = new Date();
				var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
				var nd = new Date(utc + (3600000 * parseFloat(offset)));
				if(nd.isDstObserved()){
					nd = nd.addHours(1)
				}

				return nd
  		}
  	
}
/* Return the appropriate angles for hours,minutes and seconds.*/
var Clock = function(timezone = "current", smooth = false){
	var fulltime = getCurrentTime(timezone);
	if(fulltime){
		var output;
		if(!smooth){
			var time = (((fulltime.getHours()* 60) +  fulltime.getMinutes()) * 60) + fulltime.getSeconds()
			var secondsStuff = time * 6;
			var minutesStuff = time * 0.1;
			var hoursStuff = time * 0.00833333333;
		} else{
			var time = (((fulltime.getHours()* 60) +  fulltime.getMinutes()) * 60) + fulltime.getSeconds()
			var secondsStuff = (time + (fulltime.getMilliseconds()/1000)) * 6;
			var minutesStuff = time * 0.1;
			var hoursStuff = time * 0.00833333333;
		}
		output = { secondHand: (secondsStuff + 180) % 360, 
				   minuteHand: (minutesStuff + 180) % 360, 
				   hourHand: (hoursStuff + 180) % 360};
		return output	
	}
	
}

