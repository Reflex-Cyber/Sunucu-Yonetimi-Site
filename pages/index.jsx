import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="https://www.freepnglogos.com/uploads/ataturk-png/mustafa-kemal-ataturk-imzasi-png-photo-8.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Eski TA - TPT
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       Eski TA - TPT ile eğlencenizi iki katına çıkarmaya ne dersiniz? Kendi özgür dünyanızı yaratın ve kendi eğlencenizi oluşturun, bu keyfi en iyi arkadaşlarla yaşayın. 
	  </p>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Eski TA - TPT" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Eski TA ve TPT sunucusunda keyfini iki katına çıkarmak ister misin?" }}/>
            <a href="https://discord.gg/9TndYERNqE" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Sunucumuza Katıl!
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Arkadaşlar</p>
                  <p className="text-gray-500 line-clamp-4">Eski TA - TPT özel ve saygılı arkadaşlar ile Eski TA - TPT size arakadaş edinme keyfini doyasıya yaşatıyor.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Evrensel</p>
                  <p className="text-gray-500 line-clamp-4">Tüm sunuculara göre daha farklı ve daha özel bir sunucu.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenlik</p>
                  <p className="text-gray-500 line-clamp-4">Göz atabileceğiniz ve geliştirmemize yardımcı olabileceğiniz açık arada güvenli bir sunucu.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Destek</p>
                  <p className="text-gray-500 line-clamp-4">En iyi ekip arkadaşlarımızla, yardıma ihtiyacı olan herkese en hızlı şekilde geri dönüş sağlıyoruz.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://media.discordapp.net/attachments/907378577253744640/1176892776877666325/image.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Eski TA - TPT</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">En iyi ve en güncel sunucu olan Eski TA - TPT ile en iyi eğlenceyi yaşamaya hazır mısınız?</p>
                </div>
                <img src="https://avatars.mds.yandex.net/i?id=0f31946f21346c220db0e19e91ef0c35ebac00bb-4593296-images-thumbs&n=13" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
