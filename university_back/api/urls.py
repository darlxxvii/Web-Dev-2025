from django.urls import path
from .views import(UniversityListView, UniversityDetailView, UniversityInternshipsView, InternshipDetailView, InternshipListView, TopTenInternshipsView)

urlpatterns = [
    path('universities/', UniversityListView.as_view()),
    path('universities/<int:pk>/', UniversityDetailView.as_view()),
    path('universities/<int:id>/internships/', UniversityInternshipsView.as_view()),
    path('internships/', InternshipListView.as_view()),
    path('internships/<int:pk>/', InternshipDetailView.as_view()),
    path('internships/top-ten/', TopTenInternshipsView.as_view()),


]