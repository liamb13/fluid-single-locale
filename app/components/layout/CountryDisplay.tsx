import {DEFAULT_LOCALE} from 'countries';

import {Badge} from '../ui/Badge';

export function CountryDisplay() {
  return (
    <Badge
      className="flex w-full gap-2 rounded-[--button-border-corner-radius] px-4 py-2 text-base sm:w-auto sm:max-w-fit"
      variant="outline"
    >
      {DEFAULT_LOCALE.label}
    </Badge>
  );
}
