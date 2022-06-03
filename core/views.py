import json
import profile
from django.shortcuts import render,redirect
from urllib3 import HTTPResponse
from .models import Profile
from django.http import JsonResponse

# Create your views here.
def Dashboard(request):
    context={
        'number_list':Profile.objects.all()
    }   
    return render(request, "dashboard.html", context)

def form(request):
    if request.method=="POST":
        data = json.load(request)  
        obj=Profile.objects.create(
            first_name=data["first_name"], last_name=data["last_name"],
            phone=data["phone"],email=data["email"],
            note=data['note'],date=data['date'],address=data['address']) 
        
        obj.save()
        return JsonResponse({"status": "success", "user_id":obj.id})
    return JsonResponse({'status': 'Invalid request'}, status=400)

def get_data(request, user_id):
    obj=Profile.objects.get(id=user_id)
    data={
        "first_name":obj.first_name,
        "last_name":obj.last_name,
        "email":obj.email,
        "phone":obj.phone,
        'date':obj.date,
        'note':obj.note,
        "address":obj.address
    }
    return JsonResponse(data)
    