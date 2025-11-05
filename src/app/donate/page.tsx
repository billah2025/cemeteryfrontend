"use client";

import React from "react";
import Image from "next/image";
import { Heart, HandCoins, MapPin, Phone, Mail } from "lucide-react";

export default function DonationPage() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen text-gray-800 relative overflow-hidden">
      {/* Subtle Islamic pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/islamic.png')",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
            Support Our Cemetery
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            “Whoever builds a mosque or helps in maintaining a Muslim graveyard
            for the sake of Allah, Allah will build for him a house in Paradise.”
          </p>
          <p className="mt-3 text-sm italic text-emerald-800">
            — Prophet Muhammad ﷺ
          </p>
        </div>

        {/* Donation Purpose Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "General Maintenance",
              desc: "Help maintain the graves, plants, and surroundings of the cemetery.",
            },
            {
              title: "Grave Cleaning",
              desc: "Support cleaning and dignity of graves for all visitors and families.",
            },
            {
              title: "Charity Burial Fund",
              desc: "Assist in burial arrangements for needy Muslim families.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-emerald-600 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <HandCoins className="text-emerald-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-emerald-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Donation Methods Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-emerald-600 mb-16">
          <h2 className="text-2xl font-bold text-emerald-700 text-center mb-8">
            Ways to Donate
          </h2>

          {/* bKash / Nagad QR Codes */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                Donate via bKash
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Scan the QR code below or send to our official number:
              </p>
              <p className="font-semibold text-lg text-emerald-800 mb-4">
                +880 1XXX-XXXXXX
              </p>
              <div className="flex justify-center">
                <div className="w-40 h-40 bg-gray-100 border rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    bKash QR Code Here
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                Donate via Nagad
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Scan the QR code below or send to our official number:
              </p>
              <p className="font-semibold text-lg text-emerald-800 mb-4">
                +880 1XXX-XXXXXX
              </p>
              <div className="flex justify-center">
                <div className="w-40 h-40 bg-gray-100 border rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Nagad QR Code Here
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-center text-emerald-700 mb-6">
              Bank Account Information
            </h3>
            <div className="max-w-md mx-auto text-center space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-emerald-800">
                  Bank Name:
                </span>{" "}
                Islami Bank Bangladesh Limited
              </p>
              <p>
                <span className="font-semibold text-emerald-800">
                  Account Name:
                </span>{" "}
                XYZ Muslim Cemetery Fund
              </p>
              <p>
                <span className="font-semibold text-emerald-800">
                  Account Number:
                </span>{" "}
                123 456 7890
              </p>
              <p>
                <span className="font-semibold text-emerald-800">
                  Branch:
                </span>{" "}
                Dhanmondi Branch, Dhaka
              </p>
              <p>
                <span className="font-semibold text-emerald-800">
                  SWIFT Code:
                </span>{" "}
                IBBLBDDH
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-700">
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">
            Contact & Visit
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" /> +880 1700-000000
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-700" /> info@cemetery.org
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700" /> Dhaka, Bangladesh
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            JazakAllahu Khairan for your kind support and generosity.
          </p>
        </div>
      </div>
    </div>
  );
}
