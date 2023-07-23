import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Footer, PreloaderPage } from './components';

import { setVisually, setSizeVisually } from "./redux/actions/visually";
import { fetchIntegrationPage } from "./redux/actions/integration_page";

const Home = React.lazy(() => import('./pages/Home'));
const Post = React.lazy(() => import('./pages/Post'));
const TimetableSubs = React.lazy(() => import('./pages/TimetableSubs'));
const Timetable = React.lazy(() => import('./pages/Timetable'));
const Teacher = React.lazy(() => import('./pages/Teacher'));
const Magazine = React.lazy(() => import('./pages/Magazine'));
const Institute = React.lazy(() => import('./pages/Institute'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Shop = React.lazy(() => import('./pages/Shop'));
const ShopPage = React.lazy(() => import('./pages/ShopPage'));
const Login = React.lazy(() => import('./pages/Login'));
const Confirmed = React.lazy(() => import('./pages/Confirmed'));
const Repeat = React.lazy(() => import('./pages/Repeat'));
const RestoreEmail = React.lazy(() => import('./pages/RestoreEmail'));
const RestorPass = React.lazy(() => import('./pages/RestorePass'));
const RestoreSuccess = React.lazy(() => import('./pages/RestoreSuccess'));
const Er404 = React.lazy(() => import('./pages/Er404'));
const Cabinet = React.lazy(() => import('./pages/Cabinet'));
const Library = React.lazy(() => import('./pages/Library'));
const Logout = React.lazy(() => import('./pages/Logout'));
const SessionRoom = React.lazy(() => import('./pages/SessionRoom'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const PublicOffer = React.lazy(() => import('./pages/PublicOffer'));
const Feedback = React.lazy(() => import('./pages/Feedback'));

function App() {
	const disaptch = useDispatch();

	const { color, bgColor } = useSelector(({ visually }) => visually);
	const { integration } = useSelector(({ integration_page }) => integration_page);

	React.useEffect(() => {
		disaptch(setVisually(localStorage.getItem("VISUALLY_TYPE")));
		disaptch(setSizeVisually(localStorage.getItem("VISUALLY_SIZE")));

		if (!Object.keys(integration).length) {
			disaptch(fetchIntegrationPage());
		}
	}, []);

	React.useEffect(() => {
		if (Object.keys(integration).length) {
			// Top
			const scriptTop = document.createElement("script");
			const scriptTextTop = document.createTextNode(integration.allTopJs);
			scriptTop.appendChild(scriptTextTop);

			document.querySelector("#all__vanila__js__page__top").innerHTML = "";
			document.querySelector("#all__vanila__js__page__top").appendChild(scriptTop);

			document.querySelector("#all__tags__js__page__top").innerHTML =
				integration.allTopHtml;

			// Bottom
			const scriptBottom = document.createElement("script");
			const scriptTextBottom = document.createTextNode(integration.allBottomJs);
			scriptBottom.appendChild(scriptTextBottom);

			document.querySelector("#all__vanila__js__page__bottom").innerHTML = "";
			document.querySelector("#all__vanila__js__page__bottom").appendChild(scriptBottom);

			document.querySelector("#all__tags__js__page__bottom").innerHTML =
				integration.allBottomHtml;
		}
	}, [Object.keys(integration).length]);

	return (
		<>
			<Helmet>
				<style>{`body { color: ${color}; background-color: ${bgColor}; } .checkbox+label::before {border: 1px solid ${color};} .checkbox-label {color: ${color}} .input__field_small {color: ${color}} .input__field {color: ${color}} .header-user-menu__link:hover {background-color: ${bgColor};}`}</style>
			</Helmet>

			<div className="wrapper">
				<div id="vanila__js__page__top"></div>
				<div id="tags__js__page__top"></div>

				<div id="all__vanila__js__page__top"></div>
				<div id="all__tags__js__page__top"></div>

				<Header />
				<Suspense fallback={<PreloaderPage />}>
					<Switch>
						<Route path="/" render={() => <Home />} exact />

						<Route path='/shop/:filters?' render={(props) => <Shop {...props} />} exact />
						<Route path='/shop/pages/:url' render={(props) => <ShopPage {...props} />} exact />

						<Route path='/timetables' render={(props) => <Timetable {...props} />} />
						<Route path='/timetables/:cat?' render={(props) => <Timetable {...props} />} />
						<Route path='/timetable/pages/:url' render={(props) => <TimetableSubs {...props} />} />

						<Route path='/teachers' render={() => <Teacher />} exact />

						<Route path='/institute' render={() => <Institute />} exact />

						<Route path='/post/:id' render={(props) => <Post {...props} />} exact />
						<Route path='/magazine/:cat?' render={(props) => <Magazine {...props} />} />

						{/* <Route path='/cart' render={() => <Cart />} exact /> */}

						<Route path="/feedback" render={(props) => <Feedback {...props} />} exact />

						<Route path='/login' render={() => <Login />} exact />

						<Route path='/confirmed/:hash' render={(props) => <Confirmed {...props} />} />
						<Route path='/repeat' render={() => <Repeat />} />

						<Route path='/restoreemail' render={() => <RestoreEmail />} />
						<Route path='/restoresuccess' render={() => <RestoreSuccess />} />
						<Route path='/restorepass/:hash' render={(props) => <RestorPass {...props} />} />

						<Route path='/cabinet' render={() => <Cabinet />} />
						<Route path='/library' render={() => <Library />} />
						<Route path='/session-room' render={() => <SessionRoom />} />

						<Route path='/privacy' render={() => <Privacy />} />
						<Route path='/public-offer' render={() => <PublicOffer />} />

						<Route path='/logout' render={() => <Logout />} />

						<Route render={() => <Er404 />} />
					</Switch>
				</Suspense>
				<Footer />

				<div id="vanila__js__page__bottom"></div>
				<div id="tags__js__page__bottom"></div>

				<div id="all__vanila__js__page__bottom"></div>
				<div id="all__tags__js__page__bottom"></div>
			</div>
		</>
	);
}

export default App;