"use client";
import React from "react";

function Profil() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Settings forms */}
        <div className="divide-y divide-gray-200">
          {/* Personal Information */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">
                Informations personnelles
              </h2>
              <p className="mt-1 text-sm/4 text-gray-500">
                Utilisez une adresse permanente où vous pouvez recevoir du
                courrier.
              </p>
            </div>

            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full flex items-center gap-x-8">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-24 flex-none rounded-lg bg-gray-100 object-cover outline outline-1 outline-offset-[-1px] outline-black/5"
                  />
                  <div>
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-100"
                    >
                      Changer d’avatar
                    </button>
                    <p className="mt-2 text-xs/5 text-gray-500">
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Prénom
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Nom
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Adresse e-mail
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Identifiant
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-gray-300 ring-inset focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-inset sm:max-w-md">
                      <span className="flex items-center pl-3 text-gray-500 select-none sm:text-sm">
                        example : janesmith
                      </span>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder=""
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Valider
                </button>
              </div>
            </form>
          </div>

          {/* Change password */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">
                Changer le mot de passe
              </h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Mettez à jour le mot de passe associé à votre compte.
              </p>
            </div>

            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="current-password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Mot de passe actuel
                  </label>
                  <div className="mt-2">
                    <input
                      id="current-password"
                      name="current_password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="new-password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Nouveau mot de passe
                  </label>
                  <div className="mt-2">
                    <input
                      id="new-password"
                      name="new_password"
                      type="password"
                      autoComplete="new-password"
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Confirmer le mot de passe
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirm-password"
                      name="confirm_password"
                      type="password"
                      autoComplete="new-password"
                      className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Valider
                </button>
              </div>
            </form>
          </div>

          {/* Tu peux ajouter ici les sections "Log out other sessions" et "Delete account" avec la même structure si besoin */}
        </div>
      </main>
    </div>
  );
}

export default Profil;
