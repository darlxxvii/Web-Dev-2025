from django.contrib import admin
from .models import University, Internship

class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'address')
    search_fields = ('name', 'city')
    list_filter = ('city',)

class InternshipAdmin(admin.ModelAdmin):
    list_display = ('title', 'stipend', 'university')
    search_fields = ('title', 'university__name')
    list_filter = ('university',)
    ordering = ('-stipend',)

admin.site.register(University, UniversityAdmin)
admin.site.register(Internship, InternshipAdmin)
