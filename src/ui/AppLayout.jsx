import Header from "./Header";
// import Cart from "../features/cart/Cart";
import CartOverview from "../features/cart/CartOverview";

import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import CreateUser from "../features/user/CreateUser";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation)
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CreateUser />
      {/* <Cart /> */}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
