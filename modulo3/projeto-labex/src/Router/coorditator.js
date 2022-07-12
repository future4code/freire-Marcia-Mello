export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToTripsList = (navigate) => {
    navigate("/trips/list")
}

export const goToAdminPage = (navigate) => {
    navigate("/login")
}

export const goToApplicationPage = (navigate) => {
    navigate("/trips/application")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}