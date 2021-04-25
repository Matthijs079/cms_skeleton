from django.contrib import admin
from djangocms_skills.models import Skills


@admin.register(Skills)
class SkillsAdmin(admin.ModelAdmin):
    pass

