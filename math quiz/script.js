const url = "https://x-math.herokuapp.com/api/random";
const question = document.getElementById("question");
const enteredNo = document.getElementById("enteredNo");
// const second = document.getElementById("second");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

let answer = null;
const getdata = () => {
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
			question.innerHTML = `${data.first} ${data.operation} ${data.second} = ?`;
			answer = data.answer;
		});
};
getdata();
document.getElementById("submit").addEventListener("click", () => {
	let ans = enteredNo.value;

	ans == answer
		? (correct.style.display = "block")
		: (wrong.style.display = "block");
	setTimeout(() => {
		correct.style.display = "none";
		wrong.style.display = "none";
		enteredNo.value = null;
		getdata();
	}, 3000);
});
