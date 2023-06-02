import React from 'react';

function Jsx2() {
    const isAdmin = false;
   // const loading = false;
    return (
        <>
            {
                isAdmin
                    ? <>
                        <h2>Admin Menu</h2>
                        <ul>
                            <li>Kullanici Olustur</li>
                            <li>Kullaniciyi Guncelle</li>
                            <li>Kullaniciyi Sil</li>
                        </ul>
                    </>
                    : <>
                        <h2>Kullanici Menu</h2>
                        <ul>
                            <li>Profilim</li>
                            <li>Cikis Yap</li>
                        </ul>
                    </>
            }
        </>
    )
};
export default Jsx2;