import { tagClouds } from "./js/GoogleTag.js";
import { removeLoadingAnimation } from "./js/animations.js";
import { setProjectsLayout } from "./js/masonry.js";
import { setMobileNavControl } from "./js/mobileNavigation.js";
import gsap from "gsap";

setMobileNavControl();
removeLoadingAnimation();
tagClouds();
setProjectsLayout();

/** 
https://github.com/codegridweb/Accordion-Animation-Using-TimelineMax
https://www.youtube.com/watch?v=K8xfQiKd5BM&list=WL&index=1&t=56s
**/
/** 
https://github.com/codegridweb/Accordion-Animation-Using-TimelineMax
https://www.youtube.com/watch?v=K8xfQiKd5BM&list=WL&index=1&t=56s
**/

let parent = document.querySelectorAll("[data-collapse]");
parent.forEach((element) => {
	let clickTarget = element.querySelector("*");
	let collapseElement = element.nextElementSibling;
	let collapseElementChildren = collapseElement.children;
	let tl = gsap.timeline({
		reversed: true,
		paused: true,
	});

	tl.from(
		collapseElement,
		{
			height: 0,
			duration: 1.6,
			ease: "expo.inOut",
		},
		"open"
	);
	tl.staggerFrom(
		collapseElementChildren,
		1,
		{
			autoAlpha: 0,
			y: "40%",
			ease: "expo.inOut",
		},
		0.08,
		"open+=.1"
	);

	clickTarget.addEventListener("click", () => {
		tl.reversed() ? tl.play() : tl.reverse();
	});
});