import { useEffect, useState } from "react";

export default function Quests() {
  const [quests, setQuests] = useState([]);
  const baseUrl = "http://localhost:3030/jsonstore/quests";

  useEffect(() => {
    fetch(baseUrl + "/quests")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        return setQuests(Object.values(data));
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {quests.map((quest) => (
            <div key={quest._id} className="group relative">
              <img
                alt="plant"
                src={quest.img}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://images.unsplash.com/photo-1563127673-b35a42ef206c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {quest.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Likes: {quest.likes}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">Liked</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
