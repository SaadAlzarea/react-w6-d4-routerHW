import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex flex-col justify-center w-full items-center bottom-0 fixed">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-5 w-full ">
        <div>
          <Link to="/">
            <div className="rounded-2xl border bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
              <p className="flex items-center text-3xl font-medium shadow-neutral-700 text-white h-20 m-3">
                Desert
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="mountain">
            <div className="rounded-2xl border bg-cover bg-center bg-[url(https://images.pexels.com/photos/2618804/pexels-photo-2618804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
              <p className="flex items-center text-3xl font-medium shadow-neutral-700 text-white h-20 m-3">
                mountain
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="forest">
            <div className=" rounded-2xl border bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
              <p className="flex items-center text-3xl font-medium text-white h-20 m-3">
                Forest
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="rivers">
            <div className="rounded-2xl border bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/2438/nature-forest-waves-trees.jpg)]">
              <p className="flex items-center text-3xl font-medium text-white h-20 m-3">
                Rivers
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="ocean">
            <div className=" rounded-2xl border bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
              <p className="flex items-center text-3xl font-medium text-white h-20 m-3">
                Ocean
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="sea">
            <div className=" rounded-2xl border bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg)]">
              <p className="flex items-center text-3xl font-medium text-white h-20 m-3">
                Sea
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
