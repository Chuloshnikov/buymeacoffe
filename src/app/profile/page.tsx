"use server";

export default async function ProfilePage(args) {
    return (
        <div className="max-w-2xl mx-auto px-4">
            <div className="bg-gray-200 p-4 rounded-lg">
                <div className="bg-gray-300 size-24 rounded-full p-4">avatar</div>
                <div>cover image</div>
            </div>
            <div>
                <input type="text" placeholder="username"/>
            </div>
            <div>
                <input type="text" placeholder="display name"/>
            </div>
            <div>
                <textarea name="" placeholder="bio" className=""/>
            </div>
            <div>
                <button>Save profile</button>
            </div>
            <div>
                donations list...
            </div>
        </div>
    )
}