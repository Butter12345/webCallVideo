import React from "react";

function Card() {
    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">Titre livre</h2>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-orange-500">John Doe</a>
            </div>
        </div>
    )
}

export default Card;