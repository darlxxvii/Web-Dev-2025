from django.shortcuts import render
from rest_framework import generics
from .models import University, Internship
from .serializers import UniversitySerializer, InternshipSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class UniversityListView(generics.ListAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityDetailView(generics.RetrieveAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityInternshipsView(APIView):
    def get(self, request, id):
        internships = Internship.objects.filter(university_id=id)
        serializer = InternshipSerializer(internships, many=True)
        return Response(serializer.data)
    
class InternshipListView(generics.ListAPIView):
    queryset = Internship.objects.all()
    serializer_class = InternshipSerializer

class InternshipDetailView(generics.RetrieveAPIView):
    queryset = Internship.objects.all()
    serializer_class = InternshipSerializer

class TopTenInternshipsView(APIView):
    def get(self, request):
        internships = Internship.objects.order_by('-stipend')[:10]
        serializer = InternshipSerializer(internships, many=True)
        return Response(serializer.data)