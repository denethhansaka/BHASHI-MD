const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//--------------------------------//--------------------------------//
SESSION_ID: process.env.SESSION_ID=`UnMzxK7Z#IU0NOFrFff_yC-vHdEkBHlys5ySNDy9S1ZyTAVd8A_Q`,
//--------------------------------//--------------------------------//
PREFIX: process.env.PREFIX=`.`,
//--------------------------------//--------------------------------//
ALIVE_IMG: process.env.ALIVE_IMG=`https://telegra.ph/file/d8279f4ca5da23bda7da4.jpg`,
ALIVE_MSG: process.env.ALIVE_MSG=`*𝗛𝗘𝗟𝗟𝗢 𝗜𝗠 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪*

A Bhashi Md Whatsapp Bot Based Thirt Party Application Provide Many Servise With A Teal Time Automated Conversational Experience. Enjoy.

Help : https://wa.me/94761864425`,
//--------------------------------//--------------------------------//
PEXELS_API_KEY: process.env.PEXELS_API_KEY='39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH',




//--------------------------------//--------------------------------//
MENU_IMG: process.env.MENU_IMG=`https://telegra.ph/file/d9649350faf1dd9410580.jpg`,
MENU_MSG: process.env.MENU_MSG=`‎Hello I'm Bhashi MD Your Frendly Bot Assistant. This is My All In One Commands Menu. Here All The Commands Are Arranged in Order. Type You Need Command And Send Me.

Example : You Need "Main Commands" Send Me ".mainmenu" Then You Will Get "Main Commands"


📂 𝗺𝗮𝗶𝗻𝗺𝗲𝗻𝘂
       You Can Get Main Commands.

📥 𝗱𝗹𝗺𝗲𝗻𝘂
       You Can Get Download Commands.

⚙️ 𝗰𝗼𝘃𝗲𝗿𝘁𝗺𝗲𝗻𝘂
       You Can Get Convert Commands.

🤖 𝗮𝗶𝗺𝗲𝗻𝘂
       You Can Get Ai Commands.

🐼 𝗳𝘂𝗻𝗺𝗲𝗻𝘂
       You Can Get Fun Commands.

🔍 𝘀𝗲𝗮𝗿𝗰𝗵𝗺𝗲𝗻𝘂
       You Can Get Search Commands.

🕵🏻 𝗼𝘄𝗻𝗲𝗿𝗺𝗲𝗻𝘂
       You Can Get Owner Commands.


Contact Bhashi : https://wa.me/94761864425`,


MAIN_MENU: process.env.MAIN_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Main Commands List. Enjoi Now.


📂 𝗮𝗹𝗶𝘃𝗲
       Show if The Bot is Online.

📂 𝘀𝘆𝘀𝘁𝗲𝗺
       Disply System Information.

📂 𝗽𝗶𝗻𝗴
       Ping The Bot And Shows Response Time


Contact DENETH : https://wa.me/94761864425`


DL_MENU: process.env.DL_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Download Commands List. Enjoi Now.


📥 𝘀𝗼𝗻𝗴
       You Can Download Songs.

📥 𝘃𝗶𝗱𝗲𝗼
       You Can Download Videos.


Contact Bhashi : https://wa.me/94761864425`


CONVERT_MENU: process.env.CONVERT_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Convert Commands List. Enjoi Now.


⚙️ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
       Convert Img To Sticker.

⚙️ 𝘁𝗿𝘁
       Translate Any Language.

⚙️ 𝗰𝗼𝗻𝘃𝗲𝗿𝘁
       Covert Currency To Currency.

⚙️ 𝗴𝗽𝗮𝘀𝘀
       Genarate Strong Password.


Contact Bhashi : https://wa.me/94761864425`


AI_MENU: process.env.AI_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Ai Commands List. Enjoi Now.


🤖 𝗮𝗶
       Chat With Chat GPT Ai.

🤖 𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗲
       You Can Use Ai Genarater.


Contact Bhashi : https://wa.me/94761864425`


FUN_MENU: process.env.FUN_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Convert Commands List. Enjoi Now.


🐼 𝗷𝗼𝗸𝗲
       Tell a Random Joke.

🐼 𝗳𝗮𝗰𝘁
       Give a Rendom Fact.

🐼 𝗵𝗮𝗰𝗸
       Hacking Device Massages.

🐼 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿
       Get Rendom 4K Wallpaper.

🐼 𝗮𝗻𝗶𝗺𝗲𝗴𝗶𝗿𝗹
       Get Sexy Anime Girl Image.

🐼 𝗮𝗻𝗶𝗺𝗲𝗯𝗼𝘆
       Gey Anime Boy Image.

🐼 𝗱𝗼𝗴
       Get Rendom Dog Image.

🐼 𝗿𝘃𝗶𝗱𝗲𝗼
       Get Rendom HD Video.


Contact Bhashi : https://wa.me/94786328485`


SEARCH_MENU: process.env.SEARCH_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Search Commands List. Enjoi Now.


🔍 𝗱𝗲𝗳𝗶𝗻𝗲
       Search From Dictionary.

🔍 𝗺𝗼𝘃𝗶𝗲
       Get Movie Information.

🔍 𝗴𝗶𝘁𝗵𝘂𝗯𝘀𝘁𝗮𝗹𝗸
       Get Github Profile Information.

🔍 𝘀𝗿𝗲𝗽𝗼
       Search Repo Details.

🔍 𝘄𝗲𝗮𝘁𝗵𝗲𝗿
       Fatches Weather Information.


Contact Bhashi : https://wa.me/94786328485`


OWNER_MENU: process.env.OWNER_MENU=`‎‎Hello I'm Deneth MD Your Frendly Bot Assistant. This is My Owner Commands List. But This Commands Use Can Bhashi MD Owner Only. Enjoi Now.


🕵🏻 𝗿𝗲𝘀𝘁𝗮𝗿𝘁
       Restart The Bhashi MD.

🕵🏻 𝘀𝗲𝘁𝗮𝘂𝘁𝗼𝗯𝗶𝗼
       Set Auto Bio On Bot Status.

🕵🏻 𝗷𝗼𝗶𝗻
       Join Group Invite Link.


Contact Bhashi : https://wa.me/94761864425`


//--------------------------------//--------------------------------//
MAIN_MENU: process.env.MAIN_MENU=`‎`

//--------------------------------//--------------------------------//
OMDB_API_KEY: process.env.OMDB_API_KEY="76cb7f39",
//--------------------------------//--------------------------------//
MODE: process.env.MODE="public"
//--------------------------------//--------------------------------//    
};
