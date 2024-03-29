$(function () {
	$("#Container").mixItUp();
	var e = {
		strings: ["be creative", "start your project", "innovate"],
		typeSpeed: 40,
		startDelay: 2e3,
		loop: !0,
		backDelay: 1200
	};
	new Typed(".typed-class", e)
});
var myCircle1 = Circles.create({
		id: "circles-1",
		radius: 60,
		value: 43,
		maxValue: 100,
		width: 5,
		text: function (e) {
			return e + "%"
		},
		colors: ["rgba(255,255,255,0.3)", "#fff"],
		duration: 1e3,
		wrpClass: "circles-wrp",
		textClass: "circles-text"
	}), myCircle2 = Circles.create({
		id: "circles-2",
		radius: 60,
		value: 60,
		maxValue: 100,
		width: 5,
		text: function (e) {
			return e + "%"
		},
		colors: ["rgba(255,255,255,0.3)", "#fff"],
		duration: 1e3,
		wrpClass: "circles-wrp",
		textClass: "circles-text"
	}), myCircle3 = Circles.create({
		id: "circles-3",
		radius: 60,
		value: 80,
		maxValue: 100,
		width: 5,
		text: function (e) {
			return e + "%"
		},
		colors: ["rgba(255,255,255,0.3)", "#fff"],
		duration: 1e3,
		wrpClass: "circles-wrp",
		textClass: "circles-text"
	}), myCircle4 = Circles.create({
		id: "circles-4",
		radius: 60,
		value: 100,
		maxValue: 100,
		width: 5,
		text: function (e) {
			return e + "%"
		},
		colors: ["rgba(255,255,255,0.3)", "#fff"],
		duration: 1e3,
		wrpClass: "circles-wrp",
		textClass: "circles-text"
	});
