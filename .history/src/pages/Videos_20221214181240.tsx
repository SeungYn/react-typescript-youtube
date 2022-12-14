import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


type video = {
	kind: string;
	stag: string;
	id: string;
	snippet: Object;
	channelTitle: string;
	categoryId: string;
	liveBroadcastContent: string;
	localized: Object;
	defaultAudioLanguage:string

}
export default function Videos() {
  const { keyword } = useParams();
	
	const []
  useEffect(() => {
    axios.get('/videos/popular.json').then((res) => console.log(res));
  }, [keyword]);
  return <div>videos {keyword ? `${keyword}` : '핫트렌드'}</div>;
}
{
	
		"channelTitle": "MrBeast",
		"categoryId": "24",
		"liveBroadcastContent": "none",
		"localized": {
			"title": "Survive 100 Days In Circle, Win $500,000",
			"description": "🤑 Sign up for Venmo and use the code MRBEAST to get $20 (no code needed if signing up on desktop). Get Venmo → http://venmo.me/mrbeast \n\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------\n\nGet Cash Machine by Oliver Tree here: https://lickd.lnk.to/niQ4VsID!mrbeast\nLicense ID: r5Rqad9DRze\nGet this and other songs for your next YouTube video at https://lickd.co"
		},
		"defaultAudioLanguage": "en-US"
	}
}