window.addEventListener("message", function(event){
    const Heart = document.getElementById("heart"),
    Armour = document.getElementById("armour"),
    Hunger = document.getElementById("hunger"),
    Thirst = document.getElementById("thirst"),
    Voice = document.getElementById("voice"),
    kwArmour = document.getElementById("icon_armour");
    kwHearth = document.getElementById("icon_heart");
    kwThirst = document.getElementById("icon_thirst");
    kwHunger = document.getElementById("icon_hunger");
    kwVoice = document.getElementById("icon_voice");
    kwDead = document.getElementById("icon_dead");
    let e = event.data;
        if(e.action=="update"){
            Heart.style.background = `linear-gradient(to top, rgba(101, 231, 231, 0.9) ${e.health}%, rgba(8, 8, 8, 0.8) ${e.health+20}%)`;
            if (e.health == -100) {
                kwVoice.style.display = "none";
                kwHunger.style.display = "none";
                kwThirst.style.display = "none";
                kwHearth.style.display = "none";
                kwArmour.style.display = "none";
                kwDead.style.display = "block";
            }else{
                kwVoice.style.display = "block";
                kwHunger.style.display = "block";
                kwThirst.style.display = "block";
                kwHearth.style.display = "block";
                kwArmour.style.display = "block"; 
                kwDead.style.display = "none";
            }
            Armour.style.background = `linear-gradient(to top, rgba(101, 231, 231, 0.9) ${e.armour}%, rgba(8, 8, 8, 0.8) ${e.armour > 0 ? e.armour+10 : e.armour}%)`;
            if (e.armour == 0) {
                kwArmour.style.display = "none";
            }else{
                kwArmour.style.display = "block";
            }
            Hunger.style.background = `linear-gradient(to top, rgba(101, 231, 231, 0.9) ${e.hunger}%, rgba(8, 8, 8, 0.8) ${e.hunger+20}%)`;
            Thirst.style.background = `linear-gradient(to top, rgba(101, 231, 231, 0.9) ${e.thirst}%, rgba(8, 8, 8, 0.8) ${e.thirst+20}%)`;
            Voice.style.background = `linear-gradient(to top, rgba(101, 231, 231, 0.9) ${e.voice}%, rgba(8, 8, 8, 0.8) ${e.voice}%)`;
        }
    });