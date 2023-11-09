let Dearguest = ["bilal","ali ","sir ali ","mam wania","sir zia"];
let gestwhocannotmakeit = Dearguest[1]
document.write(gestwhocannotmakeit + "You cannot attend my dinner");
Dearguest[1] = "SirUsman";
  for (let i = 0; i < Dearguest.length; i++){
      let invitation = "____Dear" + Dearguest[i] + "You invited in the Dinner,";
      document.write(invitation);
}
  
  output:ali You cannot attend my dinner____DearbilalYou invited in the Dinner,____DearSirUsmanYou invited in the Dinner,____Dearsir ali You invited in the Dinner,____Dearmam waniaYou invited in the Dinner,____Dearsir ziaYou invited in the Dinner,
