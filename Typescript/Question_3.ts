// noinspection JSDeprecatedSymbols

let person = "Hello Eric, would you like to learn some Python today?";
document.write(person.toUpperCase()); document.write("<br> <br>");
document.write(person.toLowerCase());document.write("<br> <br>");


function sentenceCase(str: string) {
     if ((str === null) || (str === ''))
         return false;
     else
         str = str.toString();

     return str.replace(/\w\S*/g,
         function (txt) {
             return txt.charAt(0).toUpperCase() +
                 txt.substr(1).toLowerCase();
         });
 }

// @ts-ignore
document.write(sentenceCase(person)); document.write("<br> <br>");

OutPut:
      HELLO ERIC, WOULD YOU LIKE TO LEARN SOME PYTHON TODAY?

      hello eric, would you like to learn some python today?

      Hello Eric, Would You Like To Learn Some Python Today?
