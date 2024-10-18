export const getBottomNavVariant = (variant: 'rounded' | 'full' | 'wide') => {
  switch (variant) {
    case 'wide':
      return {
        'border-radius': '0.95rem 0.95rem 0 0',
        padding: '0.25rem',
        width: '100%',
        bottom: '0',
      };
    case 'rounded':
      return {
        'border-radius': '9999px',
        padding: '0.5rem',
        width: '98%',
        bottom: '1.5rem',
      };
    case 'full':
      return {
        'border-radius': '0',
        padding: '0.25rem',
        width: '100%',
        bottom: '0',
      };
  }
};
