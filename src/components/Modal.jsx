import { createPortal } from "react-dom";
import { BsXLg } from "react-icons/bs";

const Backdrop = ({ setShowModal }) => {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="opacity-75 fixed z-30 bg-zinc-900 w-full h-screen top-0 left-0"
    ></div>
  );
};

const Overlay = ({ selectedCard, setShowModal }) => {
  return (
    <div className="w-full max-w-screen-2xl max-h-screen bg-slate-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 overflow-auto">
      <div className="w-full overflow-auto text-center">
        <header className="w-full bg-inherit flex items-center justify-center py-4 ">
          <button
            onClick={() => setShowModal(false)}
            className="text-4xl text-white min-w-[30px] aspect-square ml-auto mr-4 flex items-center justify-center"
          >
            <BsXLg />
          </button>
        </header>
        <div className="text-white p-4">
          <div className="img w-[100%] mx-auto">
            <img
              className="w-full aspect-video max-w-3xl mx-auto object-cover object-top border-2"
              src={selectedCard?.img_url ?? ""}
              // src="../assets/movies_covers/Aladdin_2019_HD_Movies_Desktop_Poster_1366x768.jpg"
              alt={selectedCard?.title ?? ""}
            />
          </div>
          <h4 className="text-4xl my-6">{selectedCard?.title ?? ""}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eos
            nobis asperiores aliquam corporis quos animi autem molestiae fuga
            dolores in vero ad, consequatur ducimus repellendus. Vel error
            dolore repudiandae praesentium deserunt corporis minima voluptatem
            perferendis alias, saepe, iste obcaecati itaque quae necessitatibus
            animi voluptate sint, neque nisi ea quos nulla fugiat cum nihil!
            Quisquam nemo possimus illo similique. Consequuntur magni quaerat
            necessitatibus nam officia debitis saepe aliquid. A repellendus
            omnis hic magnam cupiditate, odit, necessitatibus placeat rerum
            libero ipsam incidunt dolorem, sed consequatur et! Ullam quas ab
            dolorem hic corrupti officia! Dolorum incidunt sit hic repellendus
            illo totam. Atque vitae delectus nihil inventore nostrum, sapiente
            sunt aut ipsum porro, itaque, quia rerum. Expedita beatae repellat
            inventore illum doloremque nesciunt, necessitatibus accusantium
            eaque quia laboriosam possimus dolorum deserunt rerum adipisci nulla
            fuga vel, suscipit recusandae ullam aliquam. Qui unde quibusdam
            dolorum consequatur minus quod est ducimus voluptate iste iure fugit
            labore autem nesciunt, necessitatibus ea, numquam quasi non beatae
            reprehenderit possimus veritatis. Veniam aliquam ex dignissimos
            accusamus consequatur autem hic doloremque laboriosam eaque, ea
            ipsam distinctio dicta praesentium facilis cupiditate aut numquam
            sit tenetur nulla a ipsa vel excepturi, qui ut? Quo, aliquid
            quibusdam alias eveniet ad autem accusamus corporis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Modal({ setShowModal, selectedCard }) {
  return (
    <>
      {createPortal(
        <Backdrop setShowModal={setShowModal} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <Overlay setShowModal={setShowModal} selectedCard={selectedCard} />,
        document.getElementById("overlay")
      )}
    </>
  );
}
