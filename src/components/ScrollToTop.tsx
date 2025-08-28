import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// ページ遷移時にスクロールをトップへ
		window.scrollTo({ top: 0, behavior: "auto"});
	}, [pathname])

	return null;
};

export default ScrollToTop;
