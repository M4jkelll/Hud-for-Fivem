ESX = exports["es_extended"]:getSharedObject()

local voice = 2
Citizen.CreateThread(function()
    while not ESX.GetPlayerData().job do Citizen.Wait(10) end
    while true do
        local ped = PlayerPedId()
        local health = GetEntityHealth(ped)-100
        local armour = GetPedArmour(ped)
        TriggerEvent("esx_status:getStatus", "hunger", function(hunger)
            TriggerEvent("esx_status:getStatus", "thirst", function(thirst)
                SendNUIMessage({
                    action = "update",
                    health = health,
                    armour = armour,
                    hunger = hunger.getPercent(),
                    thirst = thirst.getPercent(),
                    voice = math.floor(voice/3*100+.5)
                })
            end)
        end)
        Citizen.Wait(150)
    end
end)



RegisterNetEvent("hud:majkelekVoice", function(mode)
    voice = mode
end)
