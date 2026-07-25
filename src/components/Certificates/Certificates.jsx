import React, { useState } from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../../constants";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 8;
  const visibleCerts = showAll ? certificates : certificates.slice(0, INITIAL_COUNT);

  const handleOpenModal = (cert) => setSelectedCert(cert);
  const handleCloseModal = () => setSelectedCert(null);

  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of certifications that reflect my continuous learning
          and skill development
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {visibleCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-48 rounded-xl bg-[#161129] flex items-center justify-center">
                  <FaCertificate className="text-purple-500 text-6xl" />
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <h4 className="text-md text-gray-400 mb-2">{cert.issuer}</h4>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <p className="text-gray-500 line-clamp-3 mb-6">
                {cert.description}
              </p>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-purple-800"
                >
                  View Certificate <FaExternalLinkAlt size={14} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-gray-700 px-4 py-2 font-semibold text-gray-400"
                >
                  View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {certificates.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 font-semibold text-base hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal Container */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                ) : (
                  <div className="lg:w-full w-[95%] h-64 rounded-xl bg-[#161129] flex items-center justify-center">
                    <FaCertificate className="text-purple-500 text-8xl" />
                  </div>
                )}
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-2 text-md">
                  {selectedCert.title}
                </h3>
                <p className="text-purple-400 mb-1 font-semibold">
                  {selectedCert.issuer}
                </p>
                <p className="text-gray-500 mb-6 text-sm">{selectedCert.date}</p>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedCert.description}
                </p>
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Credential <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
