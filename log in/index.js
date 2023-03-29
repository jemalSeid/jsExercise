"strict"

const benefitText = document.querySelector(".benefits")
const button = document.querySelector(".submitbtn")

const vegetableDietBenefit = [
    "A vegetarian diet may offer these heart-healthy benefits due to foods that are higher in fiber and unsaturated fats. Both of these nutrients help manage the body’s cholesterol. Plus, a vegetarian diet has lower levels of saturated fats, total fats, and cholesterol in the diet compared to meat-based diets.",
     "Eating a vegetarian diet can also benefit the environment. Animals emit greenhouse gases, resulting in a larger carbon footprint than vegetables or grains. In fact, a meat-based diet increases carbon emissions 2.5 times more than a plant-based diet. These greenhouse gases contribute to global warming and climate changes around the world.",
     "A vegetarian diet may also help you avoid Type 2 diabetes as you age. In studies, sticking to a vegetarian diet was associated with a 35% to 53% lower risk of developing diabetes.",
     "Plant-based diets can help you manage your weight, too. While this lifestyle choice doesn’t inherently cause weight loss, it can help you cut down on fatty tissues and empty calories so that you can better manage your weight.",
     "Plant-based foods can help keep your brain healthy. Studies have shown that consuming more plant-based foods could be linked to lower rates of dementia Alzheimer’s and cognitive impairments. ",
     "People become vegetarians for many reasons, including health, religious convictions concerns about animal welfare or the use of antibiotics and hormones in livestock or a desire to eat in a way that avoids excessive use of environmental resources.","Vegetarians appear to have lower low-density lipoprotein cholesterol levels lower blood pressure and lower rates of hypertension and type 2 diabetes than meat eaters.","Vegetarians also tend to have a lower body mass index lower overall cancer rates and lower risk of chronic disease."
]

const displayBenefits = function () {
    var benefitNumber = Math.floor(Math.random() * 8)
    benefitText.innerHTML = vegetableDietBenefit[benefitNumber]
}
button.addEventListener('click', displayBenefits);




