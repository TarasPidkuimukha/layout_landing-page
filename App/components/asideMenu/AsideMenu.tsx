import { Navigation } from './navigation';

export const AsideMenu = () => {
  return (
    <aside className="page__menu menu" id="menu">
      <div className="container__top-bar">
        <div className="top-bar">
          <a href="#" className="top-bar__logo">
            <img
              src="/src/images/icons/MyBiKE_logo_black.png"
              alt="My bike Logo"
            />
          </a>
          <a href="#" className="icon icon--close"></a>
        </div>

        <Navigation />

        <div className="nav__bottom">
          <a href="tel:+1 234 555-55-55" className="menu__phone-number">
            +1 234 5555-55-5
          </a>
          <a href="#" className="menu__book-ride">
            BOOK A TEST RIDE
          </a>
        </div>
      </div>
    </aside>
  );
};
