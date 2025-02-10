'use client';

import { sanitizeInput } from '@/utils/validationInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const sanitizedQuery = sanitizeInput(query.trim());
      if (sanitizedQuery !== '') {
        router.push(`/search?key=${encodeURIComponent(sanitizedQuery)}`);
      }
    }
  };

  return (
    <div className="hidden xl:block relative">
      <input
        type="search"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="hidden outline-none text-[15px] border-solid border-2 pl-4 pr-10 py-1 lg:block lg:w-48 xl:w-52 focus:shadow-custom-shadow-inp focus:border-sky-200 transition-all"
      />
      <div className="absolute z-10 top-[8px] right-[13px] cursor-pointer">
        <RiSearchLine size={18} />
      </div>
    </div>
  );
};

export default SearchInput;