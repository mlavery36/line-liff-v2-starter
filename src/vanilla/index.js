import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function () {
    liff
        .init({
            liffId: '1656979954-woLdEeEa',
        }) //
        .then(async () => {
            const lang = document.getElementById('lang')
            const getOS = document.getElementById('getOS')
            const getContext = document.getElementById('getContext')
            lang.innerHTML = liff.getLanguage()
            getOS.innerHTML = liff.getOS()
            console.log(lang)
            console.log(getOS)

            liff.getProfile() // TODO:NOT WORK
                .then((profile) => {
                    console.log(profile)
                })
                .catch((err)=>{
                    console.log("error", err);
                })

            // console.log(context)
        })
        .catch((error) => {
            console.log(error)
        })
});
