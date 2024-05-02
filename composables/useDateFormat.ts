export function useDateFormat() {
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
    }).format(date);
  };

  return {
    formatDate
  };
}
