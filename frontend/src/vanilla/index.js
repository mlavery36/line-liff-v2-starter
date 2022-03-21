import './index.css';
import liff from '@line/liff'


document.addEventListener("DOMContentLoaded", function () {
    liff
        .init({
            liffId: '1656979954-woLdEeEa',
        }) //
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login()
            }
            const lang = document.getElementById('lang')
            console.log(lang)
            const getOS = document.getElementById('getOS')
            const getContext = document.getElementById('getContext')
            lang.innerHTML = liff.getLanguage()
            getOS.innerHTML = liff.getOS()
            console.log(lang)
            console.log(getOS)

            const idToken = liff.getIDToken();
            console.log(idToken);
            // liff.getProfile() // TODO:NOT WORK
            //     .then((profile) => {
            //         console.log(profile)
            //     })
            //     .catch((err) => {
            //         console.log("error", err);
            //     })

            // console.log(context)
        })
        .catch((error) => {
            console.log(error)
        })
});