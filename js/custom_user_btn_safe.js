var CustomUserBtn = BX.namespace('CustomUserBtn');
var user_id = BX.message('USER_ID');
var i = 0;

CustomUserBtn.addSaveBtn = function () {
    BX.addCustomEvent('BX.Main.Popup:onShow', (e) => {
        if (e.bindElement == document.querySelector('#user-block')) {
            var popupWrap = document.querySelector('.ui-popupcomponentmaker__content--section');
            if (i === 0 && popupWrap && !popupWrap.querySelector('.safe-user-btn')) {
                var btnSafe = BX.create(
                    'a',
                    {
                        attrs: {
                            className: 'system-auth-form__item system-auth-form__scope --padding-sm safe-user-btn',
                            href: '#',
                        },
                        html: '<span class="system-auth-form__item-title">Сменить пароль</span>',
                    }
                );
                BX.bind(btnSafe, 'click', CustomUserBtn.showSafeSlider);
                popupWrap.appendChild(btnSafe);
                i++;
            }
        }
    });
};





CustomUserBtn.showSafeSlider = function () {
    var popupWrap = document.querySelector('.ui-popupcomponentmaker__content--section');
    var popup = popupWrap.closest('.popup-window');
    popup.style.opacity = '0';
    var user_id = BX.message('USER_ID');
    BX.SidePanel.Instance.open("/company/personal/user/" + user_id + "/common_security/?page=auth");

    BX.addCustomEvent('SidePanel.Slider:onCloseStart', (e) => {
        console.log(e);
        if (e.slider.url == "/company/personal/user/" + user_id + "/common_security/?page=auth") {
            console.log('yes');
            popup.style.opacity = '1';
        };

    });
};


