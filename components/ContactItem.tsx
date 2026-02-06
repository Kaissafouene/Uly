import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactItemProps {
    icon: LucideIcon;
    label: string;
    text: string;
    href: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, text, href }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
        >
            <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-400">
                <Icon size={24} />
            </div>
            <div>
                <div className="text-sm text-gray-400 mb-0.5">{label}</div>
                <div className="font-semibold text-white">{text}</div>
            </div>
        </motion.a>
    );
};
