export const usePageLoading = () => {
  const isLoading = useState('isPageLoading', () => false)
  return isLoading
}