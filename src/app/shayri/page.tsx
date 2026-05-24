"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const shayariList = [
`Teri dosti ki roshni se har din khaas lagta hai 😁  
Jis din tu na ho ... vo din adhura sa lagta hai 😌  
Tere sath bityae pal....jaise aasaman me chand khilta hai....  
Aur teri hsi ki gunj se ....mere dil ko sukoon milta hai ❤️`,

`Sab ko sab mil jaye..to ye zindagi kaisi..😔  
Jisme dil na tute vo mohabbat kaisi...🥲  
Kon kehta h dukh kbhi khatam nhi hota...🥹  
Bss ek dost chaiye..vo bhi tumhare jaisi..😉`,

`Bahaane bahaane se hi m teri baat krta hu 🥰  
Har pal apne khyalo me terse hi mulakat krta hu 🤗  
Itni baar to tu sans bhi nhi leti hogi..🫣  
Jitni baar m tuje yaad krta hu ☺️`,

`Kbhi lgta h tu anjan...pr kbhi lge..sb kuch tu hi h....🥲  
Nye dosto ko side kr..pr mera besti purana to tu hi h..😅  
Jhagda krne me mje to aate h..terse kyuki pta h ..last me mnana to tune hi h...🥹  
Haan...akhir me rhna to tune mere sath hi h..🥰`,

`Tere khule baalo ne muje sharab se jada nasha chadhaya h...  
Tere isi andaaj ne muje bhout sataya h...  
Or jo tune kaali kurti pheni h na...  
Lgta h chand dharti pr khud aya h.. 🌙`,

`Bas gayi hai tu dil mein... ab kisi aur ke liye jagah khaali na ho 😃  
Paas rahe tu mere... aur kisi cheez ki chahat na ho 🥰  
Kaash kho jaayein hum kisi galiyon ke safar ... aur safar kabhi khatam na ho…☺️`,

`Umeede mt lgana mujse.. fitoor h mera...  
M umeede todta chla jaunga...  
Ye na ho akhon me ho aasu tumhare...  
M dhundne pr bhi kbhi mil nhi paunga..`,

`Dil tuta tha mera… shayad isiliye  
taki tujhse judne ka mauka mil sake…😃  
Lakhoñ ki bheed me bhi  
meri nazar sirf tujhe hi ishq kar sake…❤️`,

`Dila saaf h mera..ye kbhi bhul mt jana🤗

Pass rhna mere..kbhi muje chodh kr mt jana.😊.
Udaas hu kbhi m ..to bss tum mere aage thoda muskra .jana..😄

Aur gussa krdu m kbhi ..to please  muje ulta dant dena..bss kbhi dur kr na jana😃`,

`Kabhi tu zyada badi... kabhi bacchi si lagti hai 😊  
Kabhi sabse achhi... kabhi sirf meri lagti hai 🥰  
Tu jab saath hoti hai... tab sabse achhi lagti hai ❤️`,

`Taras gaye hain hum aapke deedaar ko...  
Dil phir bhi bas aapka hi intezaar karta hai 💔  
Har pal saath rahun main tere...  
Ye dil roz bas yahi dua karta hai 🙏`,

`Or kya hi chahiye is dil ko...  
Bas roz teri ek jhalak mil jaaye 🥰  
Or kya hi chahiye meri raat ko...  
Bas tujhse thodi baate ho jaaye 😅`,

`Na jaane mujhse zamaana kya chahta hai…
Har pal bas tere khayalon mein doob jaana chahta hai…
Na jaane kya jhalakta hai tere chehre se…
Ke apna sab kuch chhod kar,
Dil sirf tera saath nibhaana chahta hai… 💫`,

`Sch btau to tum khubsurat jaise chand si lgti ho..🥰
Ye nadan chere or chote baalo me pyari bhaisaab lgti ho.. 😍
Ye kanch ke tukde kya batayenge tumhari khubsurti ko...🥺
Zra meri aankhon se pucho na...
Bhout hi lazbab lgti ho ❤️`,

`Meri Dil ki kitaab me tuje sbse phela pnna bna betha...😊

Ghr hu ya hostel ya phr khi or..
Mere mn sirf tuje yaad krta rhta 😅

Dosti hi h pta h dono ko.. phr bhi hr khaab me tera chehra aja betha🥰..

Pta nhi konsa khubsurat lamha tha vo jb m tujse dosti kr betha ❤️`,

`Hr kisi se dosti hum kiya nhi krte 💓
Ek hi dil h mera hr kisi ko diya nhi krte 💞🥰
Pyar m sirf tujse krta hu smj aayi 💞..
Vrna dusro ke to hum message bhi seen nhi krte 💞💞`,

`Mangi thi rab se dua..mila dena kisi ache se 💓
Rab ne tuje de diye muje..or kha smbhal ke rhkiyo... teri h abse  🥰`,
];

const likesStorageKey = "shayari-likes";

const getInitialLikes = () => {
  if (typeof window === "undefined") {
    return Array(shayariList.length).fill(0);
  }

  const savedLikes = window.localStorage.getItem(likesStorageKey);

  if (!savedLikes) {
    return Array(shayariList.length).fill(0);
  }

  try {
    const parsedLikes = JSON.parse(savedLikes) as number[];
    return shayariList.map((_, index) => parsedLikes[index] ?? 0);
  } catch {
    return Array(shayariList.length).fill(0);
  }
};

export default function ShayariPage() {
  const [likes, setLikes] = useState(getInitialLikes);

  useEffect(() => {
    window.localStorage.setItem(likesStorageKey, JSON.stringify(likes));
  }, [likes]);

  const handleLike = (index: number) => {
    const updated = [...likes];
    updated[index]++;
    setLikes(updated);
  };

  return (
    <div className="min-h-screen px-6 py-16 relative">

      {/* 🌸 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-900 via-black to-pink-900"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 bg-pink-500 blur-[120px] opacity-40 rounded-full"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-16 text-white">
        Meri <span className="text-pink-400">Shayari</span> 💖
      </h1>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">

        {shayariList.map((shayari, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            {/* Shayari */}
            <p className="text-white text-sm md:text-base italic leading-relaxed whitespace-pre-line">
              {shayari}
            </p>

            {/* Like */}
            <div className="mt-4 flex justify-end items-center gap-2">
              <motion.button
                whileTap={{ scale: 1.4 }}
                onClick={() => handleLike(i)}
                className="text-pink-400 text-xl"
              >
                ❤️
              </motion.button>

              <span className="text-white text-sm">
                {likes[i]}
              </span>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}