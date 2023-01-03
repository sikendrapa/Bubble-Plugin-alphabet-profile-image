function(instance, properties, context) {

  var str = properties.first_text;  
  var url;
  var url_start = "//dd7tel2830j4w.cloudfront.net/"
  
  function hasWhiteOrSpecial(s) {
    return /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi.test(s);
    }

  function capitalizeFirstLetter(c) {
    return c.charAt(0).toUpperCase() + c.slice(1);
    }

    if(hasWhiteOrSpecial(str)) {
    str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    }

    if (str != null)  {
      str = str.trim();
      str = capitalizeFirstLetter(str);
      str = str.charAt(0);
    }
    
    
  	console.log(str);
  
    switch(str) {
    case "A":
      url = "f1510009325845x824160452699288700";
      break;
    case "B":
      url = "f1512859392159x541018578223884100";
      break;
    case "C":
      url = "f1512859409521x374254034366458600";
      break;
    case "D":
      url = "f1512859450985x102933758404105900";
      break;
    case "E":
      url = "f1512859468400x527699048863723900";
      break;
    case "F":
      url = "f1512859500656x933212465140968600";
      break;
    case "G":
      url = "f1512859530250x660503074061125500";
      break;
    case "H":
      url = "f1512859562311x841428601648658600";
      break;
    case "I":
      url = "f1512859576225x954706225078553000";
      break;
    case "J":
      url = "f1512859606130x142825840273872020";
      break;
    case "K":
      url = "f1512859626405x801974485861137500";document
      break;
    case "L":
      url = "f1512859675580x266716414131224160";
      break;
    case "M":
      url = "f1512859704448x163864577189087870";
      break;
    case "N":
      url = "f1512859836219x632431179517880000";
      break;
    case "O":
      url = "f1512859891313x809682428138330600";
      break;
    case "P":
      url = "f1512859936573x214360509533435100";
      break;
    case "Q":
      url = "f1512859969136x620444205822423000";
      break;
    case "R":
      url = "f1512860044044x265613583382219070";
      break;
    case "S":
      url = "f1512860078436x304001721553504450";
      break;
    case "T":
      url = "f1512860094165x267422131728380920";
      break;
    case "U":
      url = "f1512860119859x991487064631655800";
      break;
    case "V":
      url = "f1512860143733x786652282346040000";
      break;
    case "W":
      url = "f1512860158545x359364627161994560";
      break;
    case "X":
      url = "f1512860180583x103629535995423790";
      break;
    case "Y":
      url = "f1512860233847x389071396784856900";
      break;
    case "Z":
      url = "f1512860248120x569141123909503200";
      break;
    default:
      url = null;
   }

  if (url != null)  {
	instance.publishState('current_value', url_start+url+"/"+str+".png");
  } else {
    instance.publishState('current_value', null);
  }

}