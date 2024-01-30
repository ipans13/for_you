"use client"
import React, { useEffect } from 'react';
import ParticleBackground from '@/components/particles';
export default function Home() {
  useEffect(() => {
    const textfull = "Kauniita Kukkia";
    const isi1 = "Zahwaa, Sebelumnya diharapkan maklum dengan polosnya web ini yaa hehehe. Tadinya saya pingin buat dengan variasi biar webnya jadi lebih indah. Tapi karena beberapa alasan yang buat web ini jadi polos termasuk saya dah lama nggak ngoding di web jadi weh hehehehe.";
    const isi2 = "Kemudian maaf dibanner atas namanya aneh yaa wkwkwk. Tapi itu adalah nama kontak kamu di hp Saya sekarang. Tujuan awalnya sii buat orang nggak tau kalo itu kamu di whatsapp saya tapi lebih dari itu menurut saya itu nama yang cantik “Kauniita kukkia”. Dari bahasa Finlandia yang artinya Bunga yang Indah."
    const isi3 = "Zahwaa hari ini kamu ulang tahun ya hihihi. Kamu pasti udah dapet ucapan dari banyak orang yaa, kecuali Saya. Maaf saya nggak bisa ungkapin secara langsung, Tulisan-Tulisan ini sebagai perantara dari Saya. Yaa semoga semua harapan yang kamu inginkan bisa tercapai yaa. Jadi diri kamu yang kamu cita-citain dan wish you all the best.";
    const isi4 = "Makasih yaa udah nungguin sampe sini. Nggak banyak yang bisa saya ungkapin Zahwaa hehehe. Semakin bertambah umur semakin banyak tantangan yang ada dan buat kamu semakin dewasa. Tetap semangat dan jadilah diri kamu sendiri hihihi.";
    const textakhir = "Makasih udah mau nonton sampe akhir hihihi";
    const banner = document.getElementById("Banner");
    const textisi = document.getElementById("textisi");
    var text = ""
    var isinya = ""
    
    function charbanner(i, timeout, kalimat) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          text += kalimat.charAt(i)
       banner.innerText = text;
       resolve();
        }, timeout);
      })
    }

    function charbannerdec(i, timeout, isi) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          text = isi.substring(0,i)
       banner.innerText = text;
       resolve();
        }, timeout);
      })
    }
    function chartextint(i, timeout, isi) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          isinya += isi.charAt(i)
       textisi.innerText = isinya;
       resolve();
        }, timeout);
      })
    }


    function chartextdec(i, timeout, isi) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          text = isi.substring(0,i)
       textisi.innerText = text;
       resolve();
        }, timeout);
      })
    }
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    function Bannertotop() {
      const bannertotop = document.getElementById("main");
      bannertotop.classList.remove("pt-72");
      bannertotop.classList.add("pt-32");
      return new Promise((resolve) => setTimeout(
        resolve()
      , 300));
    }
    function kalimatshow() {
      const kalimat = document.getElementById("isinya");
      kalimat.classList.remove("opacity-0");
      return new Promise((resolve) => setTimeout(
        resolve()
      , 1000));
    }
    function kalimathide() {
      const kalimat = document.getElementById("isinya");
      kalimat.classList.add("opacity-0");
      return new Promise((resolve) => setTimeout(
        resolve()
      , 1000));
    }
    function clear(){
      isinya = ""
      return new Promise((resolve) => setTimeout(
        resolve()
      , 10));
    }

    async function huruf() {
      await delay(500);
    await processint(textfull, charbanner, 200, 2000)
      await Bannertotop();
      await delay(2000);
      await kalimatshow();
      await delay(3000);
    
      // Loop for isi1
      await processIsi(isi1, chartextint, chartextdec, 50, 10, 9000);
    
      // Loop for isi2
      await processIsi(isi2, chartextint, chartextdec, 50, 10, 9500);
    
      // Loop for isi3
      await processIsi(isi3, chartextint, chartextdec, 50, 10, 10000);
    
      // Loop for isi4
      await processIsi(isi4, chartextint, chartextdec, 50, 10, 8500);
      await kalimathide();

      await processdec(textfull, charbannerdec, 200, 2000)

      await processint(textakhir, charbanner, 200, 2000)

    }
    async function processdec(isi, charbannerdec, intTimeout, delayTime) {
      for (var i = isi.length - 1; i >= 0; i--) {
        await charbannerdec(i, intTimeout, isi);
        
      }
      await delay(delayTime);
    }
    async function processint(isi, charbanner, intTimeout, delayTime) {
        for (var i = 0; i < isi.length; i++) {
          await charbanner(i, intTimeout, isi);
        }
      await delay(delayTime);
      }


    async function processIsi(isi, chartextint, chartextdec, intTimeout, decTimeout, delayTime) {
      for (var i = 0; i < isi.length; i++) {
        await chartextint(i, intTimeout, isi);
      }
    
      await delay(delayTime);
    
      for (var i = isi.length - 1; i >= 0; i--) {
        await chartextdec(i, decTimeout, isi);
      }
      
      await delay(400);
      await clear();
      await delay(1000)
    }
    
    huruf();
    
  })
  
  return (
    
    <main id='main' className="flex min-h-screen flex-col pr-10 pl-10 pt-72 duration-1000 ease-linear">
    <div className='text-center '>
    <span className=" text-4xl font-bold">Hai, </span> 
     <span id="Banner" className="text-4xl font-bold"></span>
    </div>

    <div id='isinya' className='text-left opacity-0 pt-14 break-words' >
      <span id="textisi" className='block mb-5'></span>
    </div>
    </main>
  );
}
