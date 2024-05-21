"use server";

export default async function ProfilePage(args) {
    return (
        <div className="max-w-2xl mx-auto px-4">
            <div className="bg-gray-200 p-4 rounded-lg">
                <div className="bg-gray-300 size-24 rounded-full p-4">avatar</div>
                <div>cover image</div>
            </div>
            <div>
                <label className="block mt-4">username</label>
                <input id="usernameIn" type="text" placeholder="username"/>
            </div>
            <div>
                <label className="block mt-4">display name</label>
                <input id="displayNameIn" type="text" placeholder="display name"/>
            </div>
            <div>
            <label className="block mt-4">bio</label>
                <textarea id="bioIn" name="" placeholder="bio" className=""/>
            </div>
            <div>
                <button className="bg-yellow-300 px-4 py-2 rounded-lg mt-4">
                    Save profile
                </button>
            </div>
            <div>
                donations list...
            </div>
        </div>
    )
}