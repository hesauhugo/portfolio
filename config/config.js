
import profile from './profile.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Hesau Hugo",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Olá, me chamo Hesau Hugo",
	description: "Sou desenvolvedor de software",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://www.linkedin.com/in/hesauhugocavalcanti/",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Quem sou eu",
	description: [
		"Graduado em Engenharia de Produção e Mestrando no Programa de Métodos Numéricos em Engenharia.",
	],
}

export const work = {
	title: "O que eu faço",
	cards: [
		{
			title: "Windows Forms",
			description: "Desenvolvo aplicações Desktop.",
			icons: null,
		},
		{
			title: "Backend",
			description: "Desenvolvo apis em .net",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projetos",
	cards: [
		{
			title: "Em desenvolvimento",
			description: "Em desenvolvimento.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hesauhugo",
				},
				{
					icon: faGithub,
					link: "https://github.com/hesauhugo",
				},
			]
		},
		{
			title: "Em desenvolvimento2",
			description: "Em desenvolvimento2.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hesauhugo",
				},
				{
					icon: faGithub,
					link: "https://github.com/hesauhugo",
				},
			]
		},
		{
			title: "Em desenvolvimento3",
			description: "Em desenvolvimento3",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hesauhugo",
				},
			]
		},
	],
}

export const contact = {
	title: "Entre em contato",
	description: "Ficarei feliz de conversar com você, mande um e-mail para conversarmos, que tal agendarmos um batepapo?",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:hesauhugo@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Hesau Hugo | Programador de Sistemas | .Net ",
	description: "Sou programador de sistemas, desenvolvo sistemas em windows forms e apis REST com .NET",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hesauhugo",
	description: "Hesau Hugo | Programador de Sistemas | .Net ",
	cards: [
		{
			title: "My website",
			link: "https://hesauhugo.com/",
		},
		{
			title: "Linkedin",
			link: "https://www.linkedin.com/in/hesauhugocavalcanti/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hesauhugo/",
		}
	]
}