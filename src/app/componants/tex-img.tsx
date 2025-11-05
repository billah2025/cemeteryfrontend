import React from 'react';
import Image from 'next/image';

const HistoricalBackground: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="py-16 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Historical Background
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through the significant events and stories that shaped this unique place.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6 lg:px-8 space-y-20">
        {/* About Murchison Cemetery Section */}
        <section className="flex flex-col md:flex-row items-center bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
          <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-3">
              About Murchison Cemetery
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              On 2 April 1893, the Governor, with the advice of the Executive Council, approved the appointment of Marshall Neil, David Little Band, Patrick John, William McNicol, Donald Matheson and William Paterson as inaugural Trustees. Chosen at a public meeting on 22 December 1892, it is not known whether these first Trustees were considered by the inhabitants the most eligible to hold the appointment for if so, by what criteria? The Murchison Cemetery, Parish of Chaucey (District Seymour as Read/now), was informed. Chaucey had surveyed the site of Murchison in March 1854, including the cemetery site.
            </p>
            <p className="text-gray-600 leading-relaxed text-base italic">
              For over half a century, as in most small rural cemeteries in Australia, each trustee represented a denominational section of the cemetery. Thus, by 1900, Trustees included additional denominations. Trustees were also generally respected local figures; former tailor William Baeran became the Sexton in Murchison 1910–1920. By 1950, for example, both Frederick Salas and son Charles were Trustees in the last decades of the nineteenth Century.
            </p>
          </div>
          <div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/siam.jpg" // Placeholder image path
              alt="Ornate statue in Murchison Cemetery"
              layout="fill"
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </section>

        {/* Trust Members Responsibilities Section */}
        <section className="flex flex-col md:flex-row-reverse items-center bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
          <div className="md:w-1/2 md:pl-10 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-teal-700 mb-6 border-b-2 border-teal-200 pb-3">
              Trust Members Responsibilities
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Trust members were to allot grave sites and to employ a grave-digger and to make provision for a Sexton. For example, the Cemetery Trust Secretary Charles Salas from 1908 to 1935 (give an informative picture of the duties of Trustees at the time, and include such Trustees as: William Day, Trustee until 1916 (died age 81 and including the M.I. in Presbyterian Ground Poor Old Diff.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed text-base italic">
              Unusually, the cemetery contains the graves of three Aborigines, all of whom died in the first half of the twentieth century: &apos;King Charles&apos; Tattambo, &apos;Queen&apos; Mary and Tattambo&apos;s son, &apos;Captain&apos; John.
            </p>
            <p className="text-gray-600 leading-relaxed text-base italic">
              Generations of many Murchison local families who settled the district are also represented by K.S.V.T.S. Murchisonians; William Duerinck, a Ticket of Leave man associated with the Protectorate having settled there in 1840, and his wife Eleanor are buried here. Their son, was the first white male child born in Murchison (1845).
            </p>
          </div>
          <div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/siam.jpg" // Placeholder image path
              alt="Lush pathway through a historic cemetery"
              layout="fill"
              objectFit="cover"
              className="group-hover:contrast-125 transition-all duration-500"
            />
          </div>
        </section>

        {/* The Italian Ossario Section */}
        <section className="flex flex-col md:flex-row items-center bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
          <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-3">
              The Italian Ossario
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Built in 1952, in a unique feature of the Cemetery, this Mediterranean style building is the last resting place of 130 Italian internees and prisoners of war who died in the area&apos;s internment camps and hospitals during the Second World War. Each November a memorial service was held at the Ossario attended by hundreds of members of the Italian community.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed text-base italic">
              A commemorative plaque was unveiled on 27 April 2015 in a ceremony involving Murchison Primary School students, part of the Australia-wide &apos;Generating a Future&apos; school program. This ceremony included an olive tree, a seedling from an original pine cone from Lone Pine Ridge, also took place.
            </p>
            <p className="text-gray-600 leading-relaxed text-base italic">
              Like all public Cemeteries, Murchison Cemetery is administered by an active group of voluntary Trustees appointed by the Governor in Council through the Department of Human Services.
            </p>
          </div>
          <div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/siam.jpg" // Placeholder image path
              alt="Historic General Cemetery gate"
              layout="fill"
              objectFit="cover"
              className="group-hover:brightness-110 transition-all duration-500"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HistoricalBackground;