function Hakkımızda({ searchParams }: any) {
  if (searchParams.customError === "true") {
    throw new Error("custom error var")
  }
  return (
    <div>
      Hakkımızda
    </div>
  )
}

export default Hakkımızda
