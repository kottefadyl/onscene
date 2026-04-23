import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a234a] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Section Logo et Slogan */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold italic tracking-tighter">On</h2>
            <div className="space-y-2 max-w-xs">
              <p className="font-semibold text-lg leading-snug">
                Rejoignez une nouvelle économie culturelle
              </p>
              <p className="text-gray-300 text-sm">
                Artiste, apprenant ou mécène, trouvez votre place sur OnScene.
              </p>
            </div>
          </div>

          {/* Section Liens */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Comment ça marche</a></li>
              <li><a href="#" className="hover:text-white transition">Artistes populaires</a></li>
              <li><a href="#" className="hover:text-white transition">À propos</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Section Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Ligne de séparation et Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center text-gray-400 text-xs">
          Tous droits réservés @ ESC Intelligence
        </div>
      </div>
    </footer>
  );
};

export default Footer;
